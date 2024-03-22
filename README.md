# GitHub Contributions

This project is a script that updates a YAML file with the current date and time, and then commits and pushes the changes to a Git repository. The purpose of this script is to create a commit on GitHub every day.

## How it works

The script reads a YAML file named `data.yaml`, updates a field named `date` with the current date and time, writes the changes back to the file, and then commits and pushes the changes to a Git repository.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the script with the appropriate command for your language of choice. For example, if you're using the JavaScript version of the script, you would run `node github_contributions.js`. If you're using the python version, just run `python ./github_contributions.py`
4. Before running the script, you need to install some dependencies depending of the script, for Javascript `npm install js-yaml` and for Python `pip install pyyaml`
5. To configure the script to run every day, you can use a cron job if you're on a Unix-based system like Linux or MacOS. Here's how you can do it:

- For JavaScript: `0 0 * * * /usr/local/bin/node /path/to/github_contributions.js`
- For Python: `0 0 * * * /usr/bin/python3 /path/to/github_contributions.py`

This line tells cron to run the script every day at midnight. The 0 0 \* \* \* means "at 0 minutes past 0 hours, every day".

## Requirements

This script requires Node.js for the JavaScript version or Python for the Python version. It also requires the `yaml` module in both versions.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
