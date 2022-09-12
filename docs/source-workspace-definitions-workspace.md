# Workspace Schema

```txt
C4MJS#/definitions/SourceWorkspaceDto
```

Workspace object, sits at the top level

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [source-workspace.schema.json\*](source-workspace.schema.json "open original schema") |

## SourceWorkspaceDto Type

`object` ([Workspace](source-workspace-definitions-workspace.md))

# SourceWorkspaceDto Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [css](#css)         | `string` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-css.md "C4MJS#/definitions/SourceWorkspaceDto/properties/css")         |
| [groups](#groups)   | `array`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-groups.md "C4MJS#/definitions/SourceWorkspaceDto/properties/groups")   |
| [id](#id)           | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-id.md "C4MJS#/definitions/SourceWorkspaceDto/properties/id")           |
| [name](#name)       | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-name.md "C4MJS#/definitions/SourceWorkspaceDto/properties/name")       |
| [version](#version) | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-version.md "C4MJS#/definitions/SourceWorkspaceDto/properties/version") |

## css



`css`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-css.md "C4MJS#/definitions/SourceWorkspaceDto/properties/css")

### css Type

`string`

## groups

Workspace groups

`groups`

*   is optional

*   Type: `object[]` ([Group](source-workspace-definitions-group.md))

*   cannot be null

*   defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-groups.md "C4MJS#/definitions/SourceWorkspaceDto/properties/groups")

### groups Type

`object[]` ([Group](source-workspace-definitions-group.md))

## id

ID, must be camel case

`id`

*   is required

*   Type: `string` ([ID](source-workspace-definitions-workspace-properties-id.md))

*   cannot be null

*   defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-id.md "C4MJS#/definitions/SourceWorkspaceDto/properties/id")

### id Type

`string` ([ID](source-workspace-definitions-workspace-properties-id.md))

### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](https://regexr.com/?expression=%5E\(%5Ba-zA-Z0-9%5D\)*%24 "try regular expression with regexr.com")

### id Examples

```json
"bigBankPlc"
```

```json
"mainframeBankingSystem"
```

```json
"emailSystem"
```

```json
"webApplication"
```

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-name.md "C4MJS#/definitions/SourceWorkspaceDto/properties/name")

### name Type

`string`

## version



`version`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-version.md "C4MJS#/definitions/SourceWorkspaceDto/properties/version")

### version Type

`string`
