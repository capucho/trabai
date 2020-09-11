# trabai
Task manager.

This allows the user to manage three work task list

`inbox`, `waiting` and `maybe`

Inbox: things to be done
Waiting: things waiting for other people to reply/solve
Maybe: things you might wanna do, or not.

## Installation

npm install -g trabai

trabai --help to get help


## Examples

`trabai add inbox "Add tests to package X"`

`trabai read inbox`

`trabai remove inbox 1`

## Data store

To keep it simple, data is stored in a `.trabai.json` file in the user root folder (resolved from os.homedir() in node).
