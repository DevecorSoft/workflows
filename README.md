# github reusable workflows @Devcorsoft

## 1. read version

- nodejs-platform

```yaml
jobs:
  invoke:
    uses: Devecorsoft/workflows/.github/workflows/read-version-node.yml@v1
    with:
      package_json: "./package.json"
```
