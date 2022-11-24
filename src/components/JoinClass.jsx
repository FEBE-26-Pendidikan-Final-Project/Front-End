import React from "react";
import '../css/modal.css'
import buletan1 from '../assets/img/buletan1.png'

function JoinClass() {
  return (
    <>

<button type="button" class="btn btn-primary btn-join-class" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Join Class
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-light title-modal" id="exampleModalLabel">Enter your class code to join</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center mt-3 position-relative">
        <div className="group-input">
        <input type="text" class="text-center col-md-8 input-code" maxlength="6" required id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>
      <div class="footer mx-auto">
        <button type="button" class="btn btn-primary btn-join-modal p-0">Join</button>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default JoinClass;
