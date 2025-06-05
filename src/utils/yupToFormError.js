export function yupToFormError(err, refs) {
  const errorObj = {};
  err.inner.forEach((error) => {
    errorObj[error.path] = error.message;
  });

  const firstErrorField = err.inner[0]?.path;
  console.log(firstErrorField);
  if (firstErrorField && refs[firstErrorField]?.current) {
    refs[firstErrorField].current.focus();
  }
  return errorObj;
}
