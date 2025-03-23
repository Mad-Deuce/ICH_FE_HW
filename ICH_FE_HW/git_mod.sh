
#!/bin/bash

echo 'hello watch'
 

for branch in $(git branch -r | grep -v '\->'); do
  	FN="${branch#*_}"
#	FNS="${FN#\\h\\k}"
#	FN2=$branch | sed 's/./_/g'
	BR="${branch#origin/}"  
	echo 'branch: '  $branch 
	echo 'file name: ' $FN
#	echo 'file name2: ' $FNS
	echo 'branch name: ' $BR

echo 'clone: ' $BR
 git clone -b  $BR  https://github.com/Mad-Deuce/ICH_FE_HW.git
echo 'rename: ich_FE_HW to ' $FN 
 mv ICH_FE_HW  $FN
# git add . ; git commit -m 'change file structure 6.2' ; git push --force -u origin

	sleep 1
	echo 'next branch'

   # git branch --track "${branch#origin/}" "$branch"
done
 git add . &&  git commit -m 'change file structure' && git push --force -u origin
