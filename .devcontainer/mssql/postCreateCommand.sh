#!/bin/bash
sed -i 's/\r$//' "$0"
dacpac="false"
sqlfiles="false"
SApassword=$1
dacpath=$2
sqlpath=$3

echo "SELECT * FROM SYS.DATABASES" | dd of=testsqlconnection.sql
for _ in {1..60};
do
    if /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$SApassword" -d master -i testsqlconnection.sql > /dev/null
    then
        echo "SQL server ready"
        break
    else
        echo "Not ready yet..."
        sleep 1
    fi
done
rm testsqlconnection.sql

for f in "$dacpath"/*.dacpac; do
    [ -e "$f" ] || continue
    dacpac="true"
    echo "Found dacpac $f"
done

for f in "$sqlpath"/*.sql; do
    [ -e "$f" ] || continue
    sqlfiles="true"
    echo "Found SQL file $f"
done

if [ "$sqlfiles" = "true" ]
then
    for f in "$sqlpath"/*.sql; do
        [ -e "$f" ] || continue
        echo "Executing $f"
        /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$SApassword" -d master -i "$f"
    done
fi

if [ "$dacpac" = "true" ]
then
    for f in "$dacpath"/*.dacpac; do
        [ -e "$f" ] || continue
        dbname=$(basename "$f" ".dacpac")
        echo "Deploying dacpac $f"
        /opt/sqlpackage/sqlpackage /Action:Publish /SourceFile:"$f" /TargetServerName:localhost /TargetDatabaseName:"$dbname" /TargetUser:sa /TargetPassword:"$SApassword"
    done
fi
