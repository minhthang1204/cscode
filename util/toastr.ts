import toastr from "toastr";
import Swal from "sweetalert2";
import "toastr/build/toastr.css";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

export const Alert = () =>
  Swal.fire({
    title: "Successful",
    text: "Thank you for applying to be a member. We will get back to you soon." ,
    icon: "success",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 1500
  });

export default toastr;
