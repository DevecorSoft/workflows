# github reusable workflows @Devcorsoft

## 1. read version

```yaml
jobs:
  invoke:
    uses: Devecorsoft/workflows/.github/workflows/read-version.yml@read-v1
    with:
      platform: "nodejs"
      path: "./test/package.json"
```
