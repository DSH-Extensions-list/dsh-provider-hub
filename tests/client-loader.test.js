import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import vm from 'node:vm';

test('published browser client registers through the DSH module loader', () => {
  const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  const source = readFileSync(new URL(`../${pkg.exports['./client']}`, import.meta.url), 'utf8');
  let registered;
  vm.runInNewContext(source, {window:{__ModuleLoader__:{load(value) { registered = value; }}}});
  assert.equal(registered.id, '@arzvaak/dsh-provider-hub');
  const client = registered.factory(createRequire(import.meta.url));
  assert.equal(typeof client.apply, 'function');
  assert.equal(typeof client.ProviderHub, 'function');
});
