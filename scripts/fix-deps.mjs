import { execSync } from 'child_process';
import { rmSync } from 'fs';
import { join } from 'path';

const projectDir = join(import.meta.dirname, '..');

console.log('[v0] Removing node_modules/lucide-react...');
try {
  rmSync(join(projectDir, 'node_modules', 'lucide-react'), { recursive: true, force: true });
  console.log('[v0] Removed lucide-react from node_modules');
} catch (e) {
  console.log('[v0] lucide-react not found in node_modules, continuing...');
}

console.log('[v0] Removing package-lock.json...');
try {
  rmSync(join(projectDir, 'package-lock.json'), { force: true });
  console.log('[v0] Removed package-lock.json');
} catch (e) {
  console.log('[v0] No package-lock.json found');
}

console.log('[v0] Running npm install --legacy-peer-deps...');
try {
  execSync('npm install --legacy-peer-deps', { cwd: projectDir, stdio: 'inherit' });
  console.log('[v0] npm install completed successfully!');
} catch (e) {
  console.error('[v0] npm install failed:', e.message);
}
