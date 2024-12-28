---
title: 'rsnow'
description: 'Celebrate Christmas and snows in terminal'
pubDate: 'Dec 25 2023'
heroImage:
    url: 'https://images.unsplash.com/photo-1505139229755-18651479b8be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    alt: 'GitHub wallpaper'
platform: TUI
stack: ['Rust']
# website: https://github.com/kirontoo/astro-theme-cody
github: https://github.com/wjwei-handsome/rsnow
order: 3
---

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/wjwei-handsome/rsnow/ci.yml)
![GitHub repo size](https://img.shields.io/github/repo-size/wjwei-handsome/rsnow)

# rsnow

## ❄️❄️❄️🎄🎄🎄Merry Christmas!🎄🎄🎄❄️❄️❄️

May this Christmas season bring you closer to all those that you treasure in your heart. Have a Merry Christmas and a Happy New year!

## Install

```bash
git clone https://github.com/wjwei-handsome/rsnow.git
cd rsnow
cargo build --release
./target/release/rsnow
```

or just

```bash
cargo install --git https://github.com/wjwei-handsome/rsnow.git
```

## Usage

Just `rsnow` in your terminal.

Add `-h` or `--help` for help messages:

```bash
$ rsnow -h
Merry Christmas!

Usage: rsnow [OPTIONS]

Options:
  -s, --speed <SPEED>        Speed of snowfall [default: 1]
  -q, --quantity <QUANTITY>  Quantity of snowflakes [default: 20]
  -r, --rainbow              Bool, enabled rainbow color [default is false]
  -t, --randomtype           Bool, enabled random shape [default is false]
  -n, --notree               Bool, remove the Christmas tree [default is false]
  -h, --help                 Print help
  -V, --version              Print version
```

## Enjoy it!
