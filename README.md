## Requirements
error in nodemailer hence use:
sudo npm install --save-dev @types/nodemailer --legacy-peer-deps

##For the fetch first error:
Zoyas-MacBook-Air:artist-portfolio aveis$ git push origin main
To https://github.com/ZoyaMomin30/portfolio
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/ZoyaMomin30/portfolio'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

use : 
git push origin main --force 

or 
1st pull your git:
git pull origin main --rebase

then push:
git push origin main

if you get changes like this:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> main

manually correct them and then push to git like you would normally.
