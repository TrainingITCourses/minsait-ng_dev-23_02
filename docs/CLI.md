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
# generate a copyright component
ng g c layout/copyright
```

## Create shared module

```bash
# create a shared module
ng g m shared
# create an exported link component
ng g c shared/link --export
# import module shared in layout module
# create an activity-item component
ng g c shared/activity-item --export
```
