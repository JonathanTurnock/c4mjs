# Component Schema

```txt
C4MJS#/definitions/SourceContainerDto/properties/components/items
```

Component inside a Systems Container, represents a software component

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [source-workspace.schema.json\*](source-workspace.schema.json "open original schema") |

## items Type

`object` ([Component](source-workspace-definitions-component.md))

# items Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                    |
| :------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [cluster](#cluster)       | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-cluster.md "C4MJS#/definitions/SourceComponentDto/properties/cluster")       |
| [deprecated](#deprecated) | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-deprecated.md "C4MJS#/definitions/SourceComponentDto/properties/deprecated") |
| [deps](#deps)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-dependencies.md "C4MJS#/definitions/SourceComponentDto/properties/deps")     |
| [desc](#desc)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-description.md "C4MJS#/definitions/SourceComponentDto/properties/desc")      |
| [external](#external)     | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-external.md "C4MJS#/definitions/SourceComponentDto/properties/external")     |
| [id](#id)                 | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-id.md "C4MJS#/definitions/SourceComponentDto/properties/id")                 |
| [name](#name)             | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-name.md "C4MJS#/definitions/SourceComponentDto/properties/name")             |
| [notes](#notes)           | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-notes.md "C4MJS#/definitions/SourceComponentDto/properties/notes")           |
| [tags](#tags)             | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-tags.md "C4MJS#/definitions/SourceComponentDto/properties/tags")             |
| [tech](#tech)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-component-properties-tech.md "C4MJS#/definitions/SourceComponentDto/properties/tech")             |

## cluster

Apply a cluster name to an item, match this with the same cluster name for another item to force them to be placed inside a Graphviz subgraph. This helps to keep items grouped together such as containers in a microservices architecture.

`cluster`

- is optional

- Type: `string` ([Cluster](source-workspace-definitions-component-properties-cluster.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-cluster.md "C4MJS#/definitions/SourceComponentDto/properties/cluster")

### cluster Type

`string` ([Cluster](source-workspace-definitions-component-properties-cluster.md))

### cluster Examples

```json
"legacy"
```

```json
"api"
```

## deprecated

If the item is deprecated or not, this will append \[DEPRECATED] to the end of the item and surround it in a dashed red stroke

`deprecated`

- is optional

- Type: `boolean` ([Deprecated](source-workspace-definitions-component-properties-deprecated.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-deprecated.md "C4MJS#/definitions/SourceComponentDto/properties/deprecated")

### deprecated Type

`boolean` ([Deprecated](source-workspace-definitions-component-properties-deprecated.md))

### deprecated Examples

```json
"true"
```

```json
"false"
```

## deps

Multiline string representing the entities dependecies, seperate dependecies with a new line. 'this' can be used to reference the current item and gets replaced with its address at buildtime.

`deps`

- is optional

- Type: `string` ([Dependencies](source-workspace-definitions-component-properties-dependencies.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-dependencies.md "C4MJS#/definitions/SourceComponentDto/properties/deps")

### deps Type

`string` ([Dependencies](source-workspace-definitions-component-properties-dependencies.md))

### deps Examples

```json
"this -> emailSystem : Sends Emails using"
```

## desc

Items Description, can be free text and will be displayed as the C4 Body within the boxes

`desc`

- is optional

- Type: `string` ([Description](source-workspace-definitions-component-properties-description.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-description.md "C4MJS#/definitions/SourceComponentDto/properties/desc")

### desc Type

`string` ([Description](source-workspace-definitions-component-properties-description.md))

## external

If the item is external or not, this is used to swap the defaut color out for Greyscale as per the C4 standard.

`external`

- is optional

- Type: `boolean` ([External](source-workspace-definitions-component-properties-external.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-external.md "C4MJS#/definitions/SourceComponentDto/properties/external")

### external Type

`boolean` ([External](source-workspace-definitions-component-properties-external.md))

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

- Type: `string` ([ID](source-workspace-definitions-component-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-id.md "C4MJS#/definitions/SourceComponentDto/properties/id")

### id Type

`string` ([ID](source-workspace-definitions-component-properties-id.md))

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

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-component-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-name.md "C4MJS#/definitions/SourceComponentDto/properties/name")

### name Type

`string` ([Name](source-workspace-definitions-component-properties-name.md))

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

Notes about the item, this is displayed in the tooltip when hovering the cursor over an item

`notes`

- is optional

- Type: `string` ([Notes](source-workspace-definitions-component-properties-notes.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-notes.md "C4MJS#/definitions/SourceComponentDto/properties/notes")

### notes Type

`string` ([Notes](source-workspace-definitions-component-properties-notes.md))

## tags

Tags that can be attached to an item, tags are included in the items class list so combine this with a custom stylesheet to customize the look of items where certain tags are present

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-tags.md "C4MJS#/definitions/SourceComponentDto/properties/tags")

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

Items Technology, this is displayed in the C4 Diagram Between the Title and Body

`tech`

- is optional

- Type: `string` ([Tech](source-workspace-definitions-component-properties-tech.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-tech.md "C4MJS#/definitions/SourceComponentDto/properties/tech")

### tech Type

`string` ([Tech](source-workspace-definitions-component-properties-tech.md))

### tech Examples

```json
"React App"
```

```json
"Spring MVC Controller"
```
