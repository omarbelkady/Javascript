#!/bin/sh
# usage: ./commit.sh => push and pull from master
#        ./commit.sh <PULL_BRANCH> <PUSH_BRANCH>
# pull
if [ -z "$1" ]; then
    echo "DEFAULT: pulling from orign master"
    git pull origin master
else
    echo "pulling from $1"
    git pull origin $1
fi

# stage files
echo "files > "
read FILES
git add $FILES

#commit to local repository
echo "commit message > "
read MSG
git commit -m "$MSG"

# push
if [ -z "$2" ]; then
    echo "DEFAULT: pushing to orign master"
    git push -u origin master
else
    echo "pushing to $2"
    git push origin -u $2
fi