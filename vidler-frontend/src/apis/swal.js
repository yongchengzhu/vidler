import Swal from 'sweetalert2'

const swalMessage = (icon, title, message) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: message
      })
};

export {swalMessage};