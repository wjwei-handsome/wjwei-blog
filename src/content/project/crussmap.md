---
title: 'crussmap'
description: 'crussmap is a faster tool to convert genome coordinates between difference reference assemblies.'
pubDate: 'May 08 2023'
heroImage:
    url: '/blog-placeholder-about.jpg'
    alt: 'GitHub wallpaper'
platform: CLI
stack: ['Rust']
website: crates.io/crates/crussmap
github: https://github.com/JianYang-Lab/crussmap
---

![Crates.io](https://img.shields.io/crates/v/crussmap)
![Crates.io](https://img.shields.io/crates/d/crussmap)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/wjwei-handsome/crussmap/rust.yml)
![Crates.io](https://img.shields.io/crates/l/crussmap)
![GitHub repo size](https://img.shields.io/github/repo-size/wjwei-handsome/crussmap)

# crussmap: [CrossMap](https://github.com/liguowang/CrossMap) in Rust

crussmap is a faster tool to convert genome coordinates between difference reference assemblies.

Support file formats: [BED,...].

This project reconstructs the [CrossMap](https://github.com/liguowang/CrossMap) code by rust to effectively improve speed and performance

## INSTALL

> install cargo and rust here: https://www.rust-lang.org/tools/install

```bash
$ cargo install crussmap
```

## USAGE

### View

View chain files in tsv/csv format of block pair representation:

```bash
## view chain file in tsv format
> crussmap view --input data/test.chain --output out_file

## view chain file in csv format
> crussmap view --input data/test.chain --output out_file --csv
```

### BED

Convert BED file from one assembly to another:

```bash
## convert with stdout
> crussmap bed --bed data/test.bed --input data/test.chain

## convert with file out
> crussmap bed --bed data/test.bed --input data/test.chain --output output_bed --unmap unmap_bed
```

### TODO

Some popular bio-formats should be supported, but I don't have enough time to do it. If you are interested in this project, just contribute to it:)

## benchmark

`environment`: 1.4 GHz 4-core Intel Core i5;16 GB 2133 MHz DDR3;macOS 13.2 (22D49)

```bash
## resonable file size of .bed and .chain
> wc -l long.bed
10013 long.bed
> wc -l v2v3.chain
253064 v2v3.chain
> time release/crussmap bed -b long.bed -i v2v3.chain -o test.out -u test.unmap

________________________________________________________
Executed in  253.78 millis    fish           external
   usr time  197.93 millis    0.16 millis  197.77 millis
   sys time   51.45 millis    1.02 millis   50.43 millis

```

## CORE IMPROVEMENT

### chain file parser

Use [nom](https://github.com/rust-bakery/nom) to parse chain file, which is a fast and easy-to-use parser combinator library for Rust.

### bed file serializer

Utilize [csv](https://github.com/BurntSushi/rust-csv) and [serde](https://docs.rs/serde/latest/serde/) to deserialize bed file.

### interval tree

A fast interval tree library: [rust-lapper](https://github.com/sstadick/rust-lapper) was used to build interval tree and query.

## ROADMAP

- [ ] support gz file input
- [ ] convert maf/paf/sam/delta to chian and crussmap

## LICENSE

Licensed under the [MIT license](http://opensource.org/licenses/MIT).
