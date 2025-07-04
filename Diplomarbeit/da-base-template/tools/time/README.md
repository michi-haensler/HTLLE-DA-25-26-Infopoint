# Git time calculator

The Python script `time-calculator.py` allows the user to generate a report of the amount of time that was spend per user on the diploma thesis. It functions as time recording system.

## Usage

### Syntax

For the sript to work, the amount of time that was spend on the commited task must be specified in the commit message. The time period can be given in hours, minutes or a combination of both.

The formatting follows the [ISO 8601](https://www.iso.org/obp/ui/#iso:std:iso:8601:-1:ed-1:v1:en) standard. Supported duration formats are given down below, where `n` represents a positive integer:

- Hours only: `[PTnH]`
- Minutes only: `[PTnM]`
- Hours and minutes: `[PTnHnM]`

It is recommended to create [issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/configuring-issues/quickstart) for tasks. If an issue was [referenced](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#issues-and-pull-requests) in a commit message, the script can map the spent time to this issue.

#### Examples

- `git commit -m "hello [PT7M]"`
- `git commit -m "hello [PT7H]"`
- `git commit -m "hello [PT7H7M]"`
- `git commit -m "hello [PT7H7M] #7"`

### Script

The script supports different flags to search and filter where `-u` and `-i` are the only required ones which should be used independently from each other.

| Flag | Description |
| - | - |
| `-u` | Total time per email address / user. |
| `-i` | Total time per issue. |
| `-a` | Show detailed breakdown. Used with -u or -i. |
| `-s` | Sort output alphabetically or by total time. |
| `-o` | Sort output ascending or descending. |
| `-f` | Specify date from which should be counted. |
| `-t` | Specify date up to which to should be counted. |
| `-b` | Specify branch which to analyze. |
| `-e` | Export results as JSON. |
| `-h` | Show help message. |

| Flag | Options | Default |
| - | - | - |
| `-s` | alpha, time | time |
| `-o` | asc, desc | desc |
| `-b` | - | main |

#### Examples

- `python time-calculator.py -u`
- `python time-calculator.py -i -a`
- `python time-calculator.py -u -s time`
- `python time-calculator.py -i -o desc`
- `python time-calculator.py -u -f 1900-01-01`
- `python time-calculator.py -i -t 1900-01-01`
- `python time-calculator.py -u -b main`
- `python time-calculator.py -u -e`
- `python time-calculator.py -i -e > output.json`

### GitHub

The Python script can also be run via GitHub. Create a folder `.github/workflows` in the root of your repository. Now paste `time-calculator.yml` into the newly created folder. It is recommended to rename the GitHub Action to `time.yml`. This GitHub Action does not trigger automatically, so when needed trigger it manually with the [workflow dispatch](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch) event. The time report is then saved as an [artifact](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow#about-workflow-artifacts) in the latest **successful** workflow run.

**Author:** Marko Schrempf
