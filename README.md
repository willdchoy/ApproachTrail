# ApproachTrail Monorepo

This repo includes all services required to deploy the development environment.

## Installation steps

Install [Docker](https://www.docker.com/get-started/)

Install [VSCode](https://code.visualstudio.com/)

Install [iTerm](https://iterm2.com/)

Install Homebrew package manager: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Install NodeJS: `brew install node`

Install Git: `brew install git`

Setup [ssh](https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on Github

Use iTerm for the following:

Clone the repo: `git clone git@github.com:willdchoy/ApproachTrail.git`

Change into ApproachTrail directory: `cd ApproachTrail`

Change to the dev branch: `git checkout dev`

Install npm packages: `bash setup.sh`

Start ApproachTrail infra: `./docker-start.sh`

Stop ApproachTrail infra: `./docker-stop.sh`

Reset ApproachTrail infra: `./docker-reset.sh`

View web app: `http://localhost:5173`
