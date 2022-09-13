# Container Schema

```txt
C4MJS#/definitions/SourceSystemDto/properties/containers/items
```

Container inside a workspace System, represents a container for code

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [source-workspace.schema.json\*](source-workspace.schema.json "open original schema") |

## items Type

`object` ([Container](source-workspace-definitions-container.md))

# items Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                    |
| :------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [components](#components) | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-components.md "C4MJS#/definitions/SourceContainerDto/properties/components") |
| [deprecated](#deprecated) | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-deprecated.md "C4MJS#/definitions/SourceContainerDto/properties/deprecated") |
| [deps](#deps)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-dependencies.md "C4MJS#/definitions/SourceContainerDto/properties/deps")     |
| [desc](#desc)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-description.md "C4MJS#/definitions/SourceContainerDto/properties/desc")      |
| [external](#external)     | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-external.md "C4MJS#/definitions/SourceContainerDto/properties/external")     |
| [id](#id)                 | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-id.md "C4MJS#/definitions/SourceContainerDto/properties/id")                 |
| [name](#name)             | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-name.md "C4MJS#/definitions/SourceContainerDto/properties/name")             |
| [notes](#notes)           | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-notes.md "C4MJS#/definitions/SourceContainerDto/properties/notes")           |
| [tags](#tags)             | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-tags.md "C4MJS#/definitions/SourceContainerDto/properties/tags")             |
| [tech](#tech)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-tech.md "C4MJS#/definitions/SourceContainerDto/properties/tech")             |

## components

Container Components

`components`

- is optional

- Type: `object[]` ([Component](source-workspace-definitions-component.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-components.md "C4MJS#/definitions/SourceContainerDto/properties/components")

### components Type

`object[]` ([Component](source-workspace-definitions-component.md))

## deprecated

Is the entity deprecated or not

`deprecated`

- is optional

- Type: `boolean` ([Deprecated](source-workspace-definitions-container-properties-deprecated.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-deprecated.md "C4MJS#/definitions/SourceContainerDto/properties/deprecated")

### deprecated Type

`boolean` ([Deprecated](source-workspace-definitions-container-properties-deprecated.md))

### deprecated Examples

```json
"true"
```

```json
"false"
```

## deps

Multiline string representing the entities dependecies, seperate dependecies with a new line. 'this' can be used to reference the current entity

`deps`

- is optional

- Type: `string` ([Dependencies](source-workspace-definitions-container-properties-dependencies.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-dependencies.md "C4MJS#/definitions/SourceContainerDto/properties/deps")

### deps Type

`string` ([Dependencies](source-workspace-definitions-container-properties-dependencies.md))

### deps Examples

```json
"this -> emailSystem : Sends Emails using"
```

## desc

Description to be used to convey information about the entity

`desc`

- is optional

- Type: `string` ([Description](source-workspace-definitions-container-properties-description.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-description.md "C4MJS#/definitions/SourceContainerDto/properties/desc")

### desc Type

`string` ([Description](source-workspace-definitions-container-properties-description.md))

## external

Is the entity external or not

`external`

- is optional

- Type: `boolean` ([External](source-workspace-definitions-container-properties-external.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-external.md "C4MJS#/definitions/SourceContainerDto/properties/external")

### external Type

`boolean` ([External](source-workspace-definitions-container-properties-external.md))

### external Examples

```json
"true"
```

```json
"false"
```

## id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-container-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-id.md "C4MJS#/definitions/SourceContainerDto/properties/id")

### id Type

`string` ([ID](source-workspace-definitions-container-properties-id.md))

### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

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

Workspace name

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-container-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-name.md "C4MJS#/definitions/SourceContainerDto/properties/name")

### name Type

`string` ([Name](source-workspace-definitions-container-properties-name.md))

### name Examples

```json
"Big Bank PLC"
```

```json
"Mainframe Banking System"
```

```json
"Email System"
```

```json
"Web Application"
```

## notes

Notes to be used to convey information about the entity

`notes`

- is optional

- Type: `string` ([Notes](source-workspace-definitions-container-properties-notes.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-notes.md "C4MJS#/definitions/SourceContainerDto/properties/notes")

### notes Type

`string` ([Notes](source-workspace-definitions-container-properties-notes.md))

## tags

Tags that can be attached to an entity

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-tags.md "C4MJS#/definitions/SourceContainerDto/properties/tags")

### tags Type

`string[]`

### tags Examples

```json
"cba"
```

```json
"critical"
```

## tech

What technology does the entity use

`tech`

- is optional

- Type: `string` ([Tech](source-workspace-definitions-container-properties-tech.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-tech.md "C4MJS#/definitions/SourceContainerDto/properties/tech")

### tech Type

`string` ([Tech](source-workspace-definitions-container-properties-tech.md))

### tech Examples

```json
"React App"
```

```json
"Spring MVC Controller"
```
