## error while installing npm or any other dependency. 
### error code ERESOLVE
Zoyas-MacBook-Air:documentation-starter aveis$ npm install

npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: my-v0-project@0.1.0
npm error Found: date-fns@4.1.0
npm error node_modules/date-fns
npm error   date-fns@"4.1.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer date-fns@"^2.28.0 || ^3.0.0" from react-day-picker@8.10.1
npm error node_modules/react-day-picker
npm error   react-day-picker@"8.10.1" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.

### solution : sudo npm install --legacy-peer-deps

## To include a css file in Tailwind

add a file in the app section.
import is as import './../about.css'
