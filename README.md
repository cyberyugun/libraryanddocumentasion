# fDocs - Design System Modular
Code repository mengenai implementasi design system modular(two way app bindings). 

## Structure
Berikut beberapa struktur direktori penting:

  1. `projects/`:  library development  -> nantinya akan menghasilkan output di dalam direktori `dist`
  2. `dist/`: src -> dist: hasil final output dari library
  3. `public/`: docs -> public: hasil final output dari docs
  4. `docs/`: docs development

## Running
Untuk memulai project ini di local, ketikkan perintah ini:
1. Running:
   ```sh
   $ ng serve
   ``` 
2. Buka di browser [http://localhost:4200/](http://localhost:4200/)

## Build
1. Jika MacOS, kamu punya iTerm. Kamu bisa menjalankannya dengan mudah, hanya mengetikkan perintah ini:
```sh
$ sudo chmod +x ./build.sh && ./build.sh
```

2. Build docs:
```sh
$ npm run prod:build-docs
```

3. Build lib:
```sh
$ npm run prod:build-lib
```