# react-simple-flexgrid

A stupid simple flexbox grid system for React. The goal is to provide a minimal approach to a grid system using flexbox, some browser watching magic, and some other goodies to allow all react users get beautiful layouts easily.

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Components](#components)
    * [Grid](#grid)
    * [Row](#grid)
    * [Column](#grid)
    * [GridComponent](#grid-component)
    * [Utils](#utils)
      * [shouldHide](#shouldhide)
      * [getSpan](#getspan)


## Installation

```bash
yarn add react-simple-flexgrid
```

## Usage
```JSX
  <Grid>
    <Row>
      <Column xs={1} hideSm>
        <p>Column with a flex value of 1 and will not show when the browser is considered "small"</p>
      </Column>
      <Column xs={2}>
        <p>Column with a flex value of 2</p>
      </Column>
      <Column xs={1} md={3}>
        <p>Column with a flex value of 1 on the smallest screen and a flex value of 3 on a medium screen</p>
      </Column>
    </Row>
  </Grid>
```

## Components

### `Grid`
The grid component is the base flex component used to contain `Row` components, similar to the many popular grid frameworks.

|    prop     |   type   | default value | description                                                             |
|-------------|----------|---------------|-------------------------------------------------------------------------|
| nogutter    | `bool`   | `false`       | Passed to the `Columns` in a `Grid` to remove the horizontal padding |
| rowpadding  | `number` | `5`           | Set the vertical padding of rows in pixels |


### `Row`
The row is the immediate and only child in a `Grid`, used to vertically separate content. Its immediate children are `Column` components

|    prop     |   type   | default value | description                                                             |
|-------------|----------|---------------|-------------------------------------------------------------------------|
| nogutter    | `bool`   | `false`       | Passed to the `Columns` in a `Grid` to remove the horizontal padding |
| rowpadding  | `number` | `5`           | Set the vertical padding of rows in pixels |
| stack       | `bool`   | `false`       | flag to change the flex-direction to `column` instead of the default `row` |

### `Column`


## License

MIT © [Miguel Caballero](https://github.com/mcabs3)
