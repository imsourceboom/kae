import { src, dest } from "gulp";
import imagemin from "gulp-imagemin";
import changed from "gulp-changed";

import paths from "./paths";

const imageSet = () => {
  return new Promise((resolve) => {
    src(paths.image.src + "/**/*.{png,jpg,jpeg,gif,svg}")
      .pipe(changed(paths.image.build))
      .pipe(
        // imagemin({
        //     progressive: true,
        //     interlaced: true,
        //     optimizationLevel: 7,
        //     svgoPlugins: [{ removeViewBox: false }],
        //     verbose: true,
        //     use: []
        // })
        imagemin(
          [
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
              plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
            }),
          ],
          {
            verbose: true,
          }
        )
      )
      .pipe(dest(paths.image.build));
    resolve();
  });
};

export default imageSet;
