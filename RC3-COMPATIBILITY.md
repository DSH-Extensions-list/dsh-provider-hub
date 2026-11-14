# DeepSeek Harness 0.2.2-rc.3 compatibility

Version 0.1.2-english.20261114.rc3.1 retains BharatCode/custom provider setup and subscription integration. The published browser export now registers through the Harness ModuleLoader; both ESM and runtime bundle outputs are reproducibly built.

Verification: 11 tests, including a VM evaluation of the published client registration, plus the real RC3 profile Loader/settings/credential store/pi-ai composition test. The composition test discovers a local HTTP fixture model, persists only the credential reference in settings, and streams fixture inference. Run `npm run build`, `npm test`, and `DSH_SOURCE=/path/to/built/harness npm run test:composition`.
