# C4MJS Schema Schema

```txt
C4MJS
```

C4MJS Schema Definition

| Abstract               | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :--------------------- | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [source-workspace.schema.json](source-workspace.schema.json "open original schema") |

## C4MJS Schema Type

unknown ([C4MJS Schema](source-workspace.md))

# C4MJS Schema Definitions

## Definitions group SourceComponentDto

Reference this group by using

```json
{ "$ref": "C4MJS#/definitions/SourceComponentDto" }
```

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

### cluster

Apply a cluster name to an item, match this with the same cluster name for another item to force them to be placed inside a Graphviz subgraph. This helps to keep items grouped together such as containers in a microservices architecture.

`cluster`

- is optional

- Type: `string` ([Cluster](source-workspace-definitions-component-properties-cluster.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-cluster.md "C4MJS#/definitions/SourceComponentDto/properties/cluster")

#### cluster Type

`string` ([Cluster](source-workspace-definitions-component-properties-cluster.md))

#### cluster Examples

```json
"legacy"
```

```json
"api"
```

### deprecated

If the item is deprecated or not, this will append \[DEPRECATED] to the end of the item and surround it in a dashed red stroke

`deprecated`

- is optional

- Type: `boolean` ([Deprecated](source-workspace-definitions-component-properties-deprecated.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-deprecated.md "C4MJS#/definitions/SourceComponentDto/properties/deprecated")

#### deprecated Type

`boolean` ([Deprecated](source-workspace-definitions-component-properties-deprecated.md))

#### deprecated Examples

```json
"true"
```

```json
"false"
```

### deps

Multiline string representing the entities dependecies, seperate dependecies with a new line. 'this' can be used to reference the current item and gets replaced with its address at buildtime.

`deps`

- is optional

- Type: `string` ([Dependencies](source-workspace-definitions-component-properties-dependencies.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-dependencies.md "C4MJS#/definitions/SourceComponentDto/properties/deps")

#### deps Type

`string` ([Dependencies](source-workspace-definitions-component-properties-dependencies.md))

#### deps Examples

```json
"this -> emailSystem : Sends Emails using"
```

### desc

Items Description, can be free text and will be displayed as the C4 Body within the boxes

`desc`

- is optional

- Type: `string` ([Description](source-workspace-definitions-component-properties-description.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-description.md "C4MJS#/definitions/SourceComponentDto/properties/desc")

#### desc Type

`string` ([Description](source-workspace-definitions-component-properties-description.md))

### external

If the item is external or not, this is used to swap the defaut color out for Greyscale as per the C4 standard.

`external`

- is optional

- Type: `boolean` ([External](source-workspace-definitions-component-properties-external.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-external.md "C4MJS#/definitions/SourceComponentDto/properties/external")

#### external Type

`boolean` ([External](source-workspace-definitions-component-properties-external.md))

#### external Examples

```json
"true"
```

```json
"false"
```

### id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-component-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-id.md "C4MJS#/definitions/SourceComponentDto/properties/id")

#### id Type

`string` ([ID](source-workspace-definitions-component-properties-id.md))

#### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

#### id Examples

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

### name

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-component-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-name.md "C4MJS#/definitions/SourceComponentDto/properties/name")

#### name Type

`string` ([Name](source-workspace-definitions-component-properties-name.md))

#### name Examples

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

### notes

Notes about the item, this is displayed in the tooltip when hovering the cursor over an item

`notes`

- is optional

- Type: `string` ([Notes](source-workspace-definitions-component-properties-notes.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-notes.md "C4MJS#/definitions/SourceComponentDto/properties/notes")

#### notes Type

`string` ([Notes](source-workspace-definitions-component-properties-notes.md))

### tags

Tags that can be attached to an item, tags are included in the items class list so combine this with a custom stylesheet to customize the look of items where certain tags are present

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-tags.md "C4MJS#/definitions/SourceComponentDto/properties/tags")

#### tags Type

`string[]`

#### tags Examples

```json
"cba"
```

```json
"critical"
```

### tech

Items Technology, this is displayed in the C4 Diagram Between the Title and Body

`tech`

- is optional

- Type: `string` ([Tech](source-workspace-definitions-component-properties-tech.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-component-properties-tech.md "C4MJS#/definitions/SourceComponentDto/properties/tech")

#### tech Type

`string` ([Tech](source-workspace-definitions-component-properties-tech.md))

#### tech Examples

```json
"React App"
```

```json
"Spring MVC Controller"
```

## Definitions group SourceContainerDto

Reference this group by using

```json
{ "$ref": "C4MJS#/definitions/SourceContainerDto" }
```

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                    |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [cluster](#cluster-1)       | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-cluster.md "C4MJS#/definitions/SourceContainerDto/properties/cluster")       |
| [components](#components)   | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-components.md "C4MJS#/definitions/SourceContainerDto/properties/components") |
| [deprecated](#deprecated-1) | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-deprecated.md "C4MJS#/definitions/SourceContainerDto/properties/deprecated") |
| [deps](#deps-1)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-dependencies.md "C4MJS#/definitions/SourceContainerDto/properties/deps")     |
| [desc](#desc-1)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-description.md "C4MJS#/definitions/SourceContainerDto/properties/desc")      |
| [external](#external-1)     | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-external.md "C4MJS#/definitions/SourceContainerDto/properties/external")     |
| [id](#id-1)                 | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-id.md "C4MJS#/definitions/SourceContainerDto/properties/id")                 |
| [name](#name-1)             | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-name.md "C4MJS#/definitions/SourceContainerDto/properties/name")             |
| [notes](#notes-1)           | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-notes.md "C4MJS#/definitions/SourceContainerDto/properties/notes")           |
| [tags](#tags-1)             | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-tags.md "C4MJS#/definitions/SourceContainerDto/properties/tags")             |
| [tech](#tech-1)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-container-properties-tech.md "C4MJS#/definitions/SourceContainerDto/properties/tech")             |

### cluster

Apply a cluster name to an item, match this with the same cluster name for another item to force them to be placed inside a Graphviz subgraph. This helps to keep items grouped together such as containers in a microservices architecture.

`cluster`

- is optional

- Type: `string` ([Cluster](source-workspace-definitions-container-properties-cluster.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-cluster.md "C4MJS#/definitions/SourceContainerDto/properties/cluster")

#### cluster Type

`string` ([Cluster](source-workspace-definitions-container-properties-cluster.md))

#### cluster Examples

```json
"legacy"
```

```json
"api"
```

### components

Container Components

`components`

- is optional

- Type: `object[]` ([Component](source-workspace-definitions-component.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-components.md "C4MJS#/definitions/SourceContainerDto/properties/components")

#### components Type

`object[]` ([Component](source-workspace-definitions-component.md))

### deprecated

If the item is deprecated or not, this will append \[DEPRECATED] to the end of the item and surround it in a dashed red stroke

`deprecated`

- is optional

- Type: `boolean` ([Deprecated](source-workspace-definitions-container-properties-deprecated.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-deprecated.md "C4MJS#/definitions/SourceContainerDto/properties/deprecated")

#### deprecated Type

`boolean` ([Deprecated](source-workspace-definitions-container-properties-deprecated.md))

#### deprecated Examples

```json
"true"
```

```json
"false"
```

### deps

Multiline string representing the entities dependecies, seperate dependecies with a new line. 'this' can be used to reference the current item and gets replaced with its address at buildtime.

`deps`

- is optional

- Type: `string` ([Dependencies](source-workspace-definitions-container-properties-dependencies.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-dependencies.md "C4MJS#/definitions/SourceContainerDto/properties/deps")

#### deps Type

`string` ([Dependencies](source-workspace-definitions-container-properties-dependencies.md))

#### deps Examples

```json
"this -> emailSystem : Sends Emails using"
```

### desc

Items Description, can be free text and will be displayed as the C4 Body within the boxes

`desc`

- is optional

- Type: `string` ([Description](source-workspace-definitions-container-properties-description.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-description.md "C4MJS#/definitions/SourceContainerDto/properties/desc")

#### desc Type

`string` ([Description](source-workspace-definitions-container-properties-description.md))

### external

If the item is external or not, this is used to swap the defaut color out for Greyscale as per the C4 standard.

`external`

- is optional

- Type: `boolean` ([External](source-workspace-definitions-container-properties-external.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-external.md "C4MJS#/definitions/SourceContainerDto/properties/external")

#### external Type

`boolean` ([External](source-workspace-definitions-container-properties-external.md))

#### external Examples

```json
"true"
```

```json
"false"
```

### id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-container-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-id.md "C4MJS#/definitions/SourceContainerDto/properties/id")

#### id Type

`string` ([ID](source-workspace-definitions-container-properties-id.md))

#### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

#### id Examples

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

### name

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-container-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-name.md "C4MJS#/definitions/SourceContainerDto/properties/name")

#### name Type

`string` ([Name](source-workspace-definitions-container-properties-name.md))

#### name Examples

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

### notes

Notes about the item, this is displayed in the tooltip when hovering the cursor over an item

`notes`

- is optional

- Type: `string` ([Notes](source-workspace-definitions-container-properties-notes.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-notes.md "C4MJS#/definitions/SourceContainerDto/properties/notes")

#### notes Type

`string` ([Notes](source-workspace-definitions-container-properties-notes.md))

### tags

Tags that can be attached to an item, tags are included in the items class list so combine this with a custom stylesheet to customize the look of items where certain tags are present

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-tags.md "C4MJS#/definitions/SourceContainerDto/properties/tags")

#### tags Type

`string[]`

#### tags Examples

```json
"cba"
```

```json
"critical"
```

### tech

Items Technology, this is displayed in the C4 Diagram Between the Title and Body

`tech`

- is optional

- Type: `string` ([Tech](source-workspace-definitions-container-properties-tech.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-container-properties-tech.md "C4MJS#/definitions/SourceContainerDto/properties/tech")

#### tech Type

`string` ([Tech](source-workspace-definitions-container-properties-tech.md))

#### tech Examples

```json
"React App"
```

```json
"Spring MVC Controller"
```

## Definitions group SourceGroupDto

Reference this group by using

```json
{ "$ref": "C4MJS#/definitions/SourceGroupDto" }
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                      |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id-2)         | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-group-properties-id.md "C4MJS#/definitions/SourceGroupDto/properties/id")           |
| [name](#name-2)     | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-group-properties-name.md "C4MJS#/definitions/SourceGroupDto/properties/name")       |
| [people](#people)   | `array`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-group-properties-people.md "C4MJS#/definitions/SourceGroupDto/properties/people")   |
| [systems](#systems) | `array`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-group-properties-systems.md "C4MJS#/definitions/SourceGroupDto/properties/systems") |
| [tags](#tags-2)     | `array`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-group-properties-tags.md "C4MJS#/definitions/SourceGroupDto/properties/tags")       |

### id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-group-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-group-properties-id.md "C4MJS#/definitions/SourceGroupDto/properties/id")

#### id Type

`string` ([ID](source-workspace-definitions-group-properties-id.md))

#### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

#### id Examples

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

### name

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-group-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-group-properties-name.md "C4MJS#/definitions/SourceGroupDto/properties/name")

#### name Type

`string` ([Name](source-workspace-definitions-group-properties-name.md))

#### name Examples

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

### people

People in the Group

`people`

- is optional

- Type: `object[]` ([Person](source-workspace-definitions-person.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-group-properties-people.md "C4MJS#/definitions/SourceGroupDto/properties/people")

#### people Type

`object[]` ([Person](source-workspace-definitions-person.md))

### systems

Software Systems in the Group

`systems`

- is optional

- Type: `object[]` ([System](source-workspace-definitions-system.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-group-properties-systems.md "C4MJS#/definitions/SourceGroupDto/properties/systems")

#### systems Type

`object[]` ([System](source-workspace-definitions-system.md))

### tags

Tags that can be attached to an item, tags are included in the items class list so combine this with a custom stylesheet to customize the look of items where certain tags are present

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-group-properties-tags.md "C4MJS#/definitions/SourceGroupDto/properties/tags")

#### tags Type

`string[]`

#### tags Examples

```json
"cba"
```

```json
"critical"
```

## Definitions group SourcePersonDto

Reference this group by using

```json
{ "$ref": "C4MJS#/definitions/SourcePersonDto" }
```

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [deprecated](#deprecated-2) | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-deprecated.md "C4MJS#/definitions/SourcePersonDto/properties/deprecated") |
| [deps](#deps-2)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-dependencies.md "C4MJS#/definitions/SourcePersonDto/properties/deps")     |
| [desc](#desc-2)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-description.md "C4MJS#/definitions/SourcePersonDto/properties/desc")      |
| [external](#external-2)     | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-external.md "C4MJS#/definitions/SourcePersonDto/properties/external")     |
| [id](#id-3)                 | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-id.md "C4MJS#/definitions/SourcePersonDto/properties/id")                 |
| [name](#name-3)             | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-name.md "C4MJS#/definitions/SourcePersonDto/properties/name")             |
| [notes](#notes-2)           | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-notes.md "C4MJS#/definitions/SourcePersonDto/properties/notes")           |
| [tags](#tags-3)             | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-person-properties-tags.md "C4MJS#/definitions/SourcePersonDto/properties/tags")             |

### deprecated

If the item is deprecated or not, this will append \[DEPRECATED] to the end of the item and surround it in a dashed red stroke

`deprecated`

- is optional

- Type: `boolean` ([Deprecated](source-workspace-definitions-person-properties-deprecated.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-deprecated.md "C4MJS#/definitions/SourcePersonDto/properties/deprecated")

#### deprecated Type

`boolean` ([Deprecated](source-workspace-definitions-person-properties-deprecated.md))

#### deprecated Examples

```json
"true"
```

```json
"false"
```

### deps

Multiline string representing the entities dependecies, seperate dependecies with a new line. 'this' can be used to reference the current item and gets replaced with its address at buildtime.

`deps`

- is optional

- Type: `string` ([Dependencies](source-workspace-definitions-person-properties-dependencies.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-dependencies.md "C4MJS#/definitions/SourcePersonDto/properties/deps")

#### deps Type

`string` ([Dependencies](source-workspace-definitions-person-properties-dependencies.md))

#### deps Examples

```json
"this -> emailSystem : Sends Emails using"
```

### desc

Items Description, can be free text and will be displayed as the C4 Body within the boxes

`desc`

- is optional

- Type: `string` ([Description](source-workspace-definitions-person-properties-description.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-description.md "C4MJS#/definitions/SourcePersonDto/properties/desc")

#### desc Type

`string` ([Description](source-workspace-definitions-person-properties-description.md))

### external

If the item is external or not, this is used to swap the defaut color out for Greyscale as per the C4 standard.

`external`

- is optional

- Type: `boolean` ([External](source-workspace-definitions-person-properties-external.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-external.md "C4MJS#/definitions/SourcePersonDto/properties/external")

#### external Type

`boolean` ([External](source-workspace-definitions-person-properties-external.md))

#### external Examples

```json
"true"
```

```json
"false"
```

### id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-person-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-id.md "C4MJS#/definitions/SourcePersonDto/properties/id")

#### id Type

`string` ([ID](source-workspace-definitions-person-properties-id.md))

#### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

#### id Examples

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

### name

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-person-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-name.md "C4MJS#/definitions/SourcePersonDto/properties/name")

#### name Type

`string` ([Name](source-workspace-definitions-person-properties-name.md))

#### name Examples

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

### notes

Notes about the item, this is displayed in the tooltip when hovering the cursor over an item

`notes`

- is optional

- Type: `string` ([Notes](source-workspace-definitions-person-properties-notes.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-notes.md "C4MJS#/definitions/SourcePersonDto/properties/notes")

#### notes Type

`string` ([Notes](source-workspace-definitions-person-properties-notes.md))

### tags

Tags that can be attached to an item, tags are included in the items class list so combine this with a custom stylesheet to customize the look of items where certain tags are present

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-person-properties-tags.md "C4MJS#/definitions/SourcePersonDto/properties/tags")

#### tags Type

`string[]`

#### tags Examples

```json
"cba"
```

```json
"critical"
```

## Definitions group SourceSystemDto

Reference this group by using

```json
{ "$ref": "C4MJS#/definitions/SourceSystemDto" }
```

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [containers](#containers)   | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-containers.md "C4MJS#/definitions/SourceSystemDto/properties/containers") |
| [deprecated](#deprecated-3) | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-deprecated.md "C4MJS#/definitions/SourceSystemDto/properties/deprecated") |
| [deps](#deps-3)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-dependencies.md "C4MJS#/definitions/SourceSystemDto/properties/deps")     |
| [desc](#desc-3)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-description.md "C4MJS#/definitions/SourceSystemDto/properties/desc")      |
| [external](#external-3)     | `boolean` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-external.md "C4MJS#/definitions/SourceSystemDto/properties/external")     |
| [id](#id-4)                 | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-id.md "C4MJS#/definitions/SourceSystemDto/properties/id")                 |
| [name](#name-4)             | `string`  | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-name.md "C4MJS#/definitions/SourceSystemDto/properties/name")             |
| [notes](#notes-3)           | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-notes.md "C4MJS#/definitions/SourceSystemDto/properties/notes")           |
| [tags](#tags-4)             | `array`   | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-tags.md "C4MJS#/definitions/SourceSystemDto/properties/tags")             |
| [tech](#tech-2)             | `string`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-system-properties-tech.md "C4MJS#/definitions/SourceSystemDto/properties/tech")             |

### containers

System containers

`containers`

- is optional

- Type: `object[]` ([Container](source-workspace-definitions-container.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-containers.md "C4MJS#/definitions/SourceSystemDto/properties/containers")

#### containers Type

`object[]` ([Container](source-workspace-definitions-container.md))

### deprecated

If the item is deprecated or not, this will append \[DEPRECATED] to the end of the item and surround it in a dashed red stroke

`deprecated`

- is optional

- Type: `boolean` ([Deprecated](source-workspace-definitions-system-properties-deprecated.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-deprecated.md "C4MJS#/definitions/SourceSystemDto/properties/deprecated")

#### deprecated Type

`boolean` ([Deprecated](source-workspace-definitions-system-properties-deprecated.md))

#### deprecated Examples

```json
"true"
```

```json
"false"
```

### deps

Multiline string representing the entities dependecies, seperate dependecies with a new line. 'this' can be used to reference the current item and gets replaced with its address at buildtime.

`deps`

- is optional

- Type: `string` ([Dependencies](source-workspace-definitions-system-properties-dependencies.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-dependencies.md "C4MJS#/definitions/SourceSystemDto/properties/deps")

#### deps Type

`string` ([Dependencies](source-workspace-definitions-system-properties-dependencies.md))

#### deps Examples

```json
"this -> emailSystem : Sends Emails using"
```

### desc

Items Description, can be free text and will be displayed as the C4 Body within the boxes

`desc`

- is optional

- Type: `string` ([Description](source-workspace-definitions-system-properties-description.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-description.md "C4MJS#/definitions/SourceSystemDto/properties/desc")

#### desc Type

`string` ([Description](source-workspace-definitions-system-properties-description.md))

### external

If the item is external or not, this is used to swap the defaut color out for Greyscale as per the C4 standard.

`external`

- is optional

- Type: `boolean` ([External](source-workspace-definitions-system-properties-external.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-external.md "C4MJS#/definitions/SourceSystemDto/properties/external")

#### external Type

`boolean` ([External](source-workspace-definitions-system-properties-external.md))

#### external Examples

```json
"true"
```

```json
"false"
```

### id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-system-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-id.md "C4MJS#/definitions/SourceSystemDto/properties/id")

#### id Type

`string` ([ID](source-workspace-definitions-system-properties-id.md))

#### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

#### id Examples

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

### name

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-system-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-name.md "C4MJS#/definitions/SourceSystemDto/properties/name")

#### name Type

`string` ([Name](source-workspace-definitions-system-properties-name.md))

#### name Examples

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

### notes

Notes about the item, this is displayed in the tooltip when hovering the cursor over an item

`notes`

- is optional

- Type: `string` ([Notes](source-workspace-definitions-system-properties-notes.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-notes.md "C4MJS#/definitions/SourceSystemDto/properties/notes")

#### notes Type

`string` ([Notes](source-workspace-definitions-system-properties-notes.md))

### tags

Tags that can be attached to an item, tags are included in the items class list so combine this with a custom stylesheet to customize the look of items where certain tags are present

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-tags.md "C4MJS#/definitions/SourceSystemDto/properties/tags")

#### tags Type

`string[]`

#### tags Examples

```json
"cba"
```

```json
"critical"
```

### tech

Items Technology, this is displayed in the C4 Diagram Between the Title and Body

`tech`

- is optional

- Type: `string` ([Tech](source-workspace-definitions-system-properties-tech.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-system-properties-tech.md "C4MJS#/definitions/SourceSystemDto/properties/tech")

#### tech Type

`string` ([Tech](source-workspace-definitions-system-properties-tech.md))

#### tech Examples

```json
"React App"
```

```json
"Spring MVC Controller"
```

## Definitions group SourceWorkspaceDto

Reference this group by using

```json
{ "$ref": "C4MJS#/definitions/SourceWorkspaceDto" }
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [groups](#groups)   | `array`  | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-groups.md "C4MJS#/definitions/SourceWorkspaceDto/properties/groups")   |
| [id](#id-5)         | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-id.md "C4MJS#/definitions/SourceWorkspaceDto/properties/id")           |
| [name](#name-5)     | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-name.md "C4MJS#/definitions/SourceWorkspaceDto/properties/name")       |
| [styles](#styles)   | `string` | Optional | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-styles.md "C4MJS#/definitions/SourceWorkspaceDto/properties/styles")   |
| [version](#version) | `string` | Required | cannot be null | [C4MJS Schema](source-workspace-definitions-workspace-properties-version.md "C4MJS#/definitions/SourceWorkspaceDto/properties/version") |

### groups

Workspace groups

`groups`

- is optional

- Type: `object[]` ([Group](source-workspace-definitions-group.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-groups.md "C4MJS#/definitions/SourceWorkspaceDto/properties/groups")

#### groups Type

`object[]` ([Group](source-workspace-definitions-group.md))

### id

ID, must be camel case

`id`

- is required

- Type: `string` ([ID](source-workspace-definitions-workspace-properties-id.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-id.md "C4MJS#/definitions/SourceWorkspaceDto/properties/id")

#### id Type

`string` ([ID](source-workspace-definitions-workspace-properties-id.md))

#### id Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^([a-zA-Z0-9])*$
```

[try pattern](<https://regexr.com/?expression=%5E(%5Ba-zA-Z0-9%5D)*%24> "try regular expression with regexr.com")

#### id Examples

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

### name

Items Name, can be free text and will be used as the C4 Title within the boxes

`name`

- is required

- Type: `string` ([Name](source-workspace-definitions-workspace-properties-name.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-name.md "C4MJS#/definitions/SourceWorkspaceDto/properties/name")

#### name Type

`string` ([Name](source-workspace-definitions-workspace-properties-name.md))

#### name Examples

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

### styles

URL to a custom stylesheet, mix this with tags (which are applied as class names) to customize the look and appearance of nodes

`styles`

- is optional

- Type: `string` ([Styles](source-workspace-definitions-workspace-properties-styles.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-styles.md "C4MJS#/definitions/SourceWorkspaceDto/properties/styles")

#### styles Type

`string` ([Styles](source-workspace-definitions-workspace-properties-styles.md))

#### styles Examples

```json
"http://localhost:9876/workspace.css"
```

### version

Version, must be in semantic version format

`version`

- is required

- Type: `string` ([Version](source-workspace-definitions-workspace-properties-version.md))

- cannot be null

- defined in: [C4MJS Schema](source-workspace-definitions-workspace-properties-version.md "C4MJS#/definitions/SourceWorkspaceDto/properties/version")

#### version Type

`string` ([Version](source-workspace-definitions-workspace-properties-version.md))

#### version Constraints

**unknown format**: the value of this string must follow the format: `semver`

#### version Examples

```json
"1.0.0"
```
