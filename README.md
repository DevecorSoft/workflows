# github reusable workflows @Devcorsoft

## 1. read version

```yaml
jobs:
  invoke:
    uses: Devecorsoft/workflows/.github/workflows/read-version.yml@read-v1
    with:
      platform: "nodejs" # or "pure-txt"
      path: "./test/package.json"
```

## 2. verify version
```yaml
jobs:
  invoke:
    uses: Devecorsoft/workflows/.github/workflows/verify-version.yml@verify-v1
    with:
      current: "v1.0.6"
      destination: "git-tag" # or v1.0.0, 2.3.4 etc.
```
