const { execSync } = require('child_process');
try {
  console.log(process.cwd());
  console.log(execSync('git log -n 1 --oneline && git status').toString());
} catch(e) {
  console.error(e.message);
}
