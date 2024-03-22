import yaml
import subprocess
from datetime import datetime

# Load existing YAML file
with open('data.yaml', 'r') as file:
  try:
    doc = yaml.safe_load(file)
  except yaml.YAMLError as exc:
    print(exc)

# Check if doc is None
if doc is None:
  doc = {}

# Update the date field
doc['date'] = datetime.now().isoformat()

# Write back to the YAML file
with open('data.yaml', 'w') as file:
  yaml.dump(doc, file)

# Add changes to git
subprocess.run(['git', 'add', '.'])

# Commit changes
subprocess.run(['git', 'commit', '-m', 'Daily commit'])

# Push changes
subprocess.run(['git', 'push'])

print("Daily commit done!")