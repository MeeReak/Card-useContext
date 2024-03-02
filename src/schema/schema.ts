import * as Yup from "yup";

const userValidetion = Yup.object().shape({
  name: Yup.string().min(3).max(25).required("Please enter a username."),
  age: Yup.number()
    .positive()
    .typeError("Please enter a age."),
  image: Yup.string()
    .test("file-size", "Image size is too large", function (value) {
      const file =
        value && this.options.context && this.options.context.files
          ? this.options.context.files[value]
          : null;
      if (file && file.size) {
        return file.size <= 1024 * 1024;
      }
      return true;
    })
    .required("Please upload an image"),
});

export { userValidetion };
