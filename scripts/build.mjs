import {build} from 'esbuild';
import {writeFile} from 'node:fs/promises';
const options = {entryPoints:['src/client.jsx'],bundle:true,platform:'browser',target:'es2022',jsx:'automatic',external:['react','react/jsx-runtime','react-dom'],legalComments:'eof'};
await build({...options,outfile:'lib/client.js',format:'esm'});
const runtime = await build({...options,format:'cjs',write:false});
const wrapped = `window.__ModuleLoader__.load({id:"@arzvaak/dsh-provider-hub",factory:(require)=>{var module={exports:{}};var exports=module.exports;\n${runtime.outputFiles[0].text}\nreturn module.exports;}});\n`;
await writeFile('lib/client.runtime.js',wrapped);
