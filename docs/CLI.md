# CLI journal

## Introduction

```bash
# Latest version
npx @angular/cli new minsait-angular_basics-febrero
# Version 12.2.18
npm install -g @angular/cli@12.2.18
ng new minsait-angular_basics-febrero
# install dependencies
cd minsait-angular_basics-febrero
npm install
# start server using ng
ng serve
## or using an npm script
npm start
# compile
ng build
```

## Create a new component

```bash
# create a header component
ng g c header
```

## Create a new module

```bash
# create a layout module
ng g m layout
# create a footer component
ng g c layout/footer
# export footer component
# move header to layout module
# 🫵🏼 practice: generate a copyright component
ng g c layout/copyright
```

## Create shared module

```bash
# create a shared module
ng g m shared
# create an exported link component
ng g c shared/link --export
# import module shared in layout module
# 🫵🏼 practice: create an activity-item component
ng g c shared/activity-item --export
```

## Routing

```bash
# create a home component
ng g c home
# create a contact component
ng g c contact
# create a lazy module
ng g m about --routing
# with its component
ng g c about
# create a lazy module with routing pointing to register
ng g m register --route=auth/register -m=app
# 🫵🏼 practice: create a lazy module with routing pointing to login
ng g m login --route=auth/login -m=app
```

## Services

```bash
# create a service
ng g s core/activities
# consume service in home component
# create a lazy module with routing pointing to activities
# consume service in activities component
ng g m activities --route=activities -m=app
# create a lazy module with parameters
# consume service in activity component
ng g m activity --route=activities/:title -m=app
# 🫵🏼 practice: create a service for currency conversion
```

## Forms

```bash
# register form
# 🫵🏼 practice: login form
# validate register form
# 🫵🏼 practice: validate login form (extract common code to a service)
# generate service
ng g s core/forms
# generate form-error component
ng g c shared/form-error --export
```

## Http

```bash
# import HttpClientModule in shared module
# import { HttpClientModule } from '@angular/common/http';
# use httpClient on activities service to get a list of activities
# generate users service
ng g s core/users
# post a new user on register service (use @Output)
# 🫵🏼 practice: use httpClient on login service to login (use @Output)
```

## Practice: add a new activity

```bash
# 🫵🏼 practice:
# route /activities/new
# form to edit an activity
# use httpClient on activities service to post a new activity
# use container - presenter event
```

### PRO:

```bash
# use picocss to style the app
npm install picocss
# add to angular.json
 "./node_modules/@picocss/pico/css/pico.min.css",
```

modify styles.css

```css
body {
  padding: 0.8rem;
}
:root {
  --form-element-spacing-vertical: 0.25rem;
  --form-element-spacing-horizontal: 0.25rem;
}
span {
  display: inline-block;
  margin-right: 0.5rem;
}
```

Compile production

```bash
npx ng build --prod
npx lite-server --baseDir="dist/minsait-angular_basics-febrero"
```
