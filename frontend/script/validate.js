const fields = document.querySelectorAll('[required]')

function fieldValidation(field) {
  function verifyError() {
    let foundError = false;

    for (let error in field.validity) {
      if (field.validity[error] && !field.validity.valid) {
        foundError = error;
      }
    }

    // console.log(foundError)
    return foundError;
  }

  return verifyError()
}

function customValidateField(event) {

  const field = event.target

  const error = fieldValidation(field)
  // console.log("Errors: ", error);

  // Função de sinalização de error
  function setCustomStyles() {
    if (error) {
      field.style.borderColor = "red"
    } else {
      field.style.borderColor = "green"
    }
  }

  setCustomStyles()
}


for (field of fields) {
  field.addEventListener('invalid', event => {
    // Eliminar o bubble
    event.preventDefault()

    customValidateField(event)
  })
  field.addEventListener('blur', customValidateField)
}

document.querySelector('form')
 .addEventListener('submit', event => {
   console.log("Enviar formulário")
   event.preventDefault();
 })

document.querySelector('btn')
 addEventListener('submit', event => {
   console.log("Acesso confirmado!")
   event.preventDefault();
 })