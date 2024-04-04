const requiresElements = document.querySelectorAll(".required");
let email = document.querySelector("#email");
let phone_nos = document.querySelectorAll(".phonevalidate");
let digitvalidates = document.querySelectorAll(".digitvalidate");
let hindi = document.querySelector("#hindi");
let gujarati = document.querySelector("#gujarati");
let english = document.querySelector("#english");
let lang_alert = document.querySelector("#lang_alert");

const validate = () => {
  let isvalidate = true;
  requiresElements.forEach((element) => {
    if (element.nextElementSibling != null) {
      if (element.nextElementSibling.tagName == "SPAN") {
        element.nextElementSibling.remove();
      }
    }
    if (element.value.trim() == "") {
      isvalidate = false;
      let span = document.createElement("span");
      span.classList.add("alert");
      span.classList.add("span");
      span.innerText = "This field Required";
      element.after(span);
    }
  });

  if (isvalidate) {
    if (email.nextElementSibling != null) {
      if (email.nextElementSibling.tagName == "SPAN") {
        email.nextElementSibling.remove();
      }
    }

    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
      isvalidate = false;
      let span = document.createElement("span");
      span.classList.add("alert");
      span.classList.add("span");
      span.innerText = "Enter Right Email";
      email.after(span);
    }
  }

  let expval = false;
  let work_experience_detail = document.querySelectorAll(
    ".work_experience_detail"
  );

  work_experience_detail.forEach((item) => {
    let inputs = item.querySelectorAll("input");

    inputs.forEach((element) => {
      if (element.value.trim() != "") {
        expval = true;
      }
    });

    if (expval) {
      inputs.forEach((element) => {
        if (element.nextElementSibling != null) {
          if (element.nextElementSibling.tagName == "SPAN") {
            element.nextElementSibling.remove();
          }
        }
        if (element.value.trim() == "") {
          isvalidate = false;
          let span = document.createElement("span");
          span.classList.add("alert");
          span.classList.add("span");
          span.innerText = "This field Required";
          element.after(span);
        }
      });
    }
    expval = false;
  });

  let referance_detail = document.querySelectorAll(".referance_detail");
  let refval = false;

  referance_detail.forEach((item) => {
    let inputs = item.querySelectorAll("input");
    inputs.forEach((element) => {
      if (element.value.trim() != "") {
        refval = true;
      }
    });

    if (refval) {
      inputs.forEach((element) => {
        if (element.nextElementSibling != null) {
          if (element.nextElementSibling.tagName == "SPAN") {
            element.nextElementSibling.remove();
          }
        }
        if (element.value.trim() == "") {
          isvalidate = false;
          let span = document.createElement("span");
          span.classList.add("alert");
          span.classList.add("span");
          span.innerText = "This field Required";
          element.after(span);
        }
      });
    }
    refval = false;
  });

  // if (refval) {
  //     let referance_number = document.querySelector("#referance_number");
  //     if (referance_number.nextElementSibling != null ) {
  //         if (referance_number.nextElementSibling.tagName == "SPAN") {
  //      referance_number.nextElementSibling.remove()
  //         }
  //      }

  //      if(referance_number.value.trim().length < 10 || referance_number.value.trim().length >10){
  //         isvalidate = false;
  //         let span = document.createElement("span");
  //                 span.classList.add("alert");
  //                 span.classList.add("span");
  //                 span.innerText = "Mobile Have to be 10 Digit"
  //                 element.after(span);
  //     }else  if(!(/^\d+$/.test(referance_number.value.trim()))){
  //         isvalidate = false;
  //         let span = document.createElement("span");
  //         span.classList.add("alert");
  //         span.classList.add("span");
  //         span.innerText = "Mobile Have to be only Digit"
  //         referance_number.after(span);
  //     }
  // }

  if (isvalidate) {
    digitvalidates.forEach((element) => {
      if (element.nextElementSibling != null) {
        if (element.nextElementSibling.tagName == "SPAN") {
          element.nextElementSibling.remove();
        }
      }
      if (!/^\d+$/.test(element.value.trim())) {
        isvalidate = false;
        let span = document.createElement("span");
        span.classList.add("alert");
        span.classList.add("span");
        span.innerText = "Value have to be only in digit";
        element.after(span);
      }
    });
  }

  if (isvalidate) {
    phone_nos.forEach((element) => {
      if (element.nextElementSibling != null) {
        if (element.nextElementSibling.tagName == "SPAN") {
          element.nextElementSibling.remove();
        }
      }

      if (
        element.value.trim().length < 10 ||
        element.value.trim().length > 10
      ) {
        isvalidate = false;
        let span = document.createElement("span");
        span.classList.add("alert");
        span.classList.add("span");
        span.innerText = "Mobile Have to be 10 Digit";
        element.after(span);
      } else if (!/^\d+$/.test(element.value.trim())) {
        isvalidate = false;
        let span = document.createElement("span");
        span.classList.add("alert");
        span.classList.add("span");
        span.innerText = "Mobile Have to be only Digit";
        element.after(span);
      }
    });
  }

  if (isvalidate) {
    lang_alert.innerText = "";
    if (
      hindi.checked != true &&
      gujarati.checked != true &&
      english.checked != true
    ) {
      isvalidate = false;
      lang_alert.innerText = "Atleast one language required";
    } else {
      if (hindi.checked == true) {
        let hindi_read = document.querySelector("#hindi_read");
        let hindi_write = document.querySelector("#hindi_write");
        let hindi_speak = document.querySelector("#hindi_speak");
        if (
          hindi_read.checked != true &&
          hindi_speak.checked != true &&
          hindi_write.checked != true
        ) {
          isvalidate = false;
          lang_alert.innerText =
            "Atleast one language opration required for hindi";
        }
      }

      if (english.checked == true) {
        let english_read = document.querySelector("#english_read");
        let english_write = document.querySelector("#english_write");
        let english_speak = document.querySelector("#english_speak");
        if (
          english_read.checked != true &&
          english_speak.checked != true &&
          english_write.checked != true
        ) {
          isvalidate = false;
          lang_alert.innerText =
            "Atleast one language opration required for english";
        }
      }

      if (gujarati.checked == true) {
        let gujarati_read = document.querySelector("#gujarati_read");
        let gujarati_write = document.querySelector("#gujarati_write");
        let gujarati_speak = document.querySelector("#gujarati_speak");
        if (
          gujarati_read.checked != true &&
          gujarati_speak.checked != true &&
          gujarati_write.checked != true
        ) {
          isvalidate = false;
          lang_alert.innerText =
            "Atleast one language opration required for gujarati";
        }
      }
    }
  }

  return isvalidate;
};

if (
  location.pathname == "/job_application/insertform" ||
  location.pathname == "/job_application/insertform2"
) {
  const add_experience = document.querySelector(".add_experience");
  add_experience.addEventListener("click", (e) => {
    e.preventDefault();
    let str = `
    <div class="formfield">
        <label for="company_name">Company Name:</label>
        <input type="text" name="company_name[]" id="company_name" >
    </div>
    <div class="formfield">
        <label for="work_experience_designation">Designation</label>
        <input type="text" name="work_experience_designation[]" id="work_experience_designation" >
    </div>
    <div class="formfield">
    <label for="from">From: </label>
    <input type="text" name="from[]" placeholder="yyyy-mm-dd"  id="from" >
</div> 

<div class="formfield">
    <label for="to">to: </label>
    <input type="text" name="to[]" placeholder="yyyy-mm-dd" id="to"  >
</div>
<div class="formfield">
<i class="fa-solid fa-trash " onclick="deletetabwork(event)"></i>
</div>`;
    let work_experience = document.querySelector(".work_experience");
    let div = document.createElement("div");
    div.classList.add("work_experience_detail");
    div.innerHTML = str;
    work_experience.append(div);
  });
}

function deletetabwork(event) {
  event.preventDefault();
  console.log(event.target);
  let work_experience_detail = document.querySelectorAll(
    ".work_experience_detail"
  );
  work_experience_detail[work_experience_detail.length - 1].remove();
}

if (
  location.pathname == "/job_application/insertform" ||
  location.pathname == "/job_application/insertform2"
) {
  const add_referance = document.querySelector(".add_referance");
  add_referance.addEventListener("click", (e) => {
    e.preventDefault();
    let str = `
    <div class="formfield">
        <label for="referance_name">Name : </label>
        <input type="text" name="referance_name[]"  id="referance_name" >
    </div>
    <div class="formfield">
        <label for="referance_number">Mobile Number : </label>
        <input type="text" name="referance_number[]" class="phonevalidate" id="referance_number" >
    </div>
    <div class="formfield">
        <label for="referance_relation">Relation : </label>
        <input type="text" name="referance_relation[]"  id="referance_relation" >
    </div>
    <div class="formfield">
<i class="fa-solid fa-trash " onclick="deletetabrefcon(event)"></i>
</div>`;
    let referance = document.querySelector(".referance");
    let div = document.createElement("div");
    div.classList.add("referance_detail");
    div.innerHTML = str;
    referance.append(div);
  });
}

function deletetabrefcon(event) {
  event.preventDefault();
  console.log(event.target);
  let referance_detail = document.querySelectorAll(".referance_detail");
  referance_detail[referance_detail.length - 1].remove();
}
// insertform 2

if (
  window.location.pathname == "/job_application/insertform2" ||
  location.pathname == "/job_application/updateform2"
) {
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");
  const parts = document.querySelectorAll(".parts");
  const submit_button = document.querySelector("#submit_button");
  const jobform = document.querySelector("#jobform");
  const formheads = document.querySelectorAll(".form-head p");
  let count = 0;

  previous.addEventListener("click", () => {
    if (count > 0) {
      formheads[count].classList.toggle("live");
      parts[count].classList.toggle("none");
      count--;
      parts[count].classList.toggle("none");
      formheads[count].classList.toggle("live");
    }
  });

  next.addEventListener("click", () => {
    if (validate2(count)) {
      if (count < 6) {
        formheads[count].classList.toggle("live");
        parts[count].classList.toggle("none");
        count++;
        parts[count].classList.toggle("none");
        formheads[count].classList.toggle("live");
      }
    }
  });

  const validate2 = (count) => {
    if (count == 0) {
      let isvalidate = true;
      const requireditems = parts[count].querySelectorAll(".required");
      let phone_no = parts[count].querySelector(".phonevalidate");
      let digitvalidateitem = parts[count].querySelector(".digitvalidate");
      let datevalidateitem = parts[count].querySelector(".datevalidate");
      let email = document.querySelector("#email");

      if (isvalidate) {
        isvalidate = requiredvalidate(requireditems);
      }

      if (isvalidate) {
        if (email.nextElementSibling != null) {
          if (email.nextElementSibling.tagName == "SPAN") {
            email.nextElementSibling.remove();
          }
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
          isvalidate = false;
          let span = document.createElement("span");
          span.classList.add("alert");
          span.classList.add("span");
          span.innerText = "Enter Right Email";
          email.after(span);
        }
      }

      if (isvalidate) {
        isvalidate = phonevalidate(phone_no);
      }
      if (isvalidate) {
        isvalidate = digitvalidate(digitvalidateitem);
      }
      if (isvalidate) {
        isvalidate = datevalidate(datevalidateitem);
      }

      return isvalidate;
    }

    if (count == 1) {
      let isvalidate = true;
      const requireditems = parts[count].querySelectorAll(".required");
      let digitvalidateitems = parts[count].querySelectorAll(".digitvalidate");

      if (isvalidate) {
        isvalidate = requiredvalidate(requireditems);
      }
      if (isvalidate) {
        digitvalidateitems.forEach((item) => {
          isvalidate = digitvalidate(item);
        });
      }
      return isvalidate;
    }

    if (count == 2) {
      let isvalidate = true;
      let expval = false;
      let work_experience_detail = document.querySelectorAll(
        ".work_experience_detail"
      );

      work_experience_detail.forEach((item) => {
        let inputs = item.querySelectorAll("input");

        inputs.forEach((element) => {
          if (element.value.trim() != "") {
            expval = true;
          }
        });

        if (expval) {
          inputs.forEach((element) => {
            if (element.nextElementSibling != null) {
              if (element.nextElementSibling.tagName == "SPAN") {
                element.nextElementSibling.remove();
              }
            }
            if (element.value.trim() == "") {
              isvalidate = false;
              let span = document.createElement("span");
              span.classList.add("alert");
              span.classList.add("span");
              span.innerText = "This field Required";
              element.after(span);
            }
          });
        }
        expval = false;
      });

      return isvalidate;
    }

    if (count == 3) {
      let isvalidate = true;
      lang_alert.innerText = "";
      if (
        hindi.checked != true &&
        gujarati.checked != true &&
        english.checked != true
      ) {
        isvalidate = false;
        lang_alert.innerText = "Atleast one language required";
      } else {
        if (hindi.checked == true) {
          let hindi_read = document.querySelector("#hindi_read");
          let hindi_write = document.querySelector("#hindi_write");
          let hindi_speak = document.querySelector("#hindi_speak");
          if (
            hindi_read.checked != true &&
            hindi_speak.checked != true &&
            hindi_write.checked != true
          ) {
            isvalidate = false;
            lang_alert.innerText =
              "Atleast one language opration required for hindi";
          }
        }

        if (english.checked == true) {
          let english_read = document.querySelector("#english_read");
          let english_write = document.querySelector("#english_write");
          let english_speak = document.querySelector("#english_speak");
          if (
            english_read.checked != true &&
            english_speak.checked != true &&
            english_write.checked != true
          ) {
            isvalidate = false;
            lang_alert.innerText =
              "Atleast one language opration required for english";
          }
        }

        if (gujarati.checked == true) {
          let gujarati_read = document.querySelector("#gujarati_read");
          let gujarati_write = document.querySelector("#gujarati_write");
          let gujarati_speak = document.querySelector("#gujarati_speak");
          if (
            gujarati_read.checked != true &&
            gujarati_speak.checked != true &&
            gujarati_write.checked != true
          ) {
            isvalidate = false;
            lang_alert.innerText =
              "Atleast one language opration required for gujarati";
          }
        }
      }
      return isvalidate;
    }
    if (count == 4) {
      return true;
    }
    if (count == 5) {
      let isvalidate = true;
      let referance_detail = document.querySelectorAll(".referance_detail");
      let refval = false;
      referance_detail.forEach((item) => {
        let inputs = item.querySelectorAll("input");
        let phoneitem = item.querySelector(".phonevalidate");
        inputs.forEach((element) => {
          if (element.value.trim() != "") {
            refval = true;
          }
        });

        if (refval) {
          inputs.forEach((element) => {
            if (element.nextElementSibling != null) {
              if (element.nextElementSibling.tagName == "SPAN") {
                element.nextElementSibling.remove();
              }
            }
            if (element.value.trim() == "") {
              isvalidate = false;
              let span = document.createElement("span");
              span.classList.add("alert");
              span.classList.add("span");
              span.innerText = "This field Required";
              element.after(span);
            }
          });

          if (isvalidate) {
            isvalidate = phonevalidate(phoneitem);
          }
        }
        refval = false;
      });
      return isvalidate;
    }

    if (count == 6) {
      let isvalidate = true;
      const requireditems = parts[count].querySelectorAll(".required");
      let digitvalidateitem = parts[count].querySelector(".digitvalidate");
      if (isvalidate) {
        isvalidate = requiredvalidate(requireditems);
      }
      if (isvalidate) {
        isvalidate = digitvalidate(digitvalidateitem);
      }
      console.log(isvalidate);
      return isvalidate;
    }
  };

  const phonevalidate = (element) => {
    let isvalidate = true;
    if (element.nextElementSibling != null) {
      if (element.nextElementSibling.tagName == "SPAN") {
        element.nextElementSibling.remove();
      }
    }

    if (element.value.trim().length < 10 || element.value.trim().length > 10) {
      isvalidate = false;
      let span = document.createElement("span");
      span.classList.add("alert");
      span.classList.add("span");
      span.innerText = "Mobile Have to be 10 Digit";
      element.after(span);
    } else if (!/^\d+$/.test(element.value.trim())) {
      isvalidate = false;
      let span = document.createElement("span");
      span.classList.add("alert");
      span.classList.add("span");
      span.innerText = "Mobile Have to be only Digit";
      element.after(span);
    }
    return isvalidate;
  };

  const digitvalidate = (element) => {
    let isvalidate = true;
    if (element.nextElementSibling != null) {
      if (element.nextElementSibling.tagName == "SPAN") {
        element.nextElementSibling.remove();
      }
    }
    if (!/^\d+$/.test(element.value.trim())) {
      isvalidate = false;
      let span = document.createElement("span");
      span.classList.add("alert");
      span.classList.add("span");
      span.innerText = "Value have to be only in digit";
      element.after(span);
    }
    return isvalidate;
  };

  const datevalidate = (element) => {
    let isvalidate = true;
    if (element.nextElementSibling != null) {
      if (element.nextElementSibling.tagName == "SPAN") {
        element.nextElementSibling.remove();
      }
    }
    if (element.value.trim().length < 10) {
      isvalidate = false;
      let span = document.createElement("span");
      span.classList.add("alert");
      span.classList.add("span");
      span.innerText = "Enter date in valid form length";
      element.after(span);
    } else {
      if (isNaN(new Date(element.value.trim()))) {
        isvalidate = false;
        let span = document.createElement("span");
        span.classList.add("alert");
        span.classList.add("span");
        span.innerText = "Enter date in valid form";
        element.after(span);
      }
    }
    return isvalidate;
  };

  const requiredvalidate = (elements) => {
    let isvalidate = true;
    elements.forEach((element) => {
      if (element.nextElementSibling != null) {
        if (element.nextElementSibling.tagName == "SPAN") {
          element.nextElementSibling.remove();
        }
      }
      if (element.value.trim() == "") {
        isvalidate = false;
        let span = document.createElement("span");
        span.classList.add("alert");
        span.classList.add("span");
        span.innerText = "This field Required";
        element.after(span);
      }
    });
    return isvalidate;
  };

  submit_button.addEventListener("click", async (e) => {
    e.preventDefault();
    if (validate2(count)) {
      const data = new URLSearchParams(new FormData(jobform));
      if (window.location.pathname == "/job_application/insertform2") {
        let result = await fetch(
          "http://localhost:3000/job_application/insertdata2",
          {
            method: "POST",
            headers: {
              "Content-Type": " application/x-www-form-urlencoded",
            },
            body: data,
          }
        );
        result = await result.json();
        alert(`Your ${result.alert}`);
        //    location.reload();
        jobform.reset();
      }

      if (window.location.pathname == "/job_application/updateform2") {
        let result = await fetch(
          "http://localhost:3000/job_application/ajaxupdatedata",
          {
            method: "POST",
            headers: {
              "Content-Type": " application/x-www-form-urlencoded",
              xml: "hello",
            },
            body: data,
          }
        );
        result = await result.json();
        alert(`Your ${result.alert}`);
        //    location.reload();
        jobform.reset();
      }
    }
  });
}

if (window.location.pathname == "/job_application/updateform2") {
  let result;
  async function getData() {
    result = await fetch(location.href, {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
        xml: "getonlydata",
      },
    });

    result = await result.json();
    //    console.log(result)
    let inputText = document.querySelectorAll("input");
    inputText.forEach((item) => {
      if (item.type === "text") {
        item.value = result.data[item.name];
      }
    });

    let state = document.getElementsByName("state");
    state[0].value = result.data["state"];
    let address1 = document.getElementsByName("address1");
    address1[0].value = result.data["address1"];
    let address2 = document.getElementsByName("address2");
    address2[0].value = result.data["address2"];
    let relationship_status = document.getElementsByName("relationship_status");
    relationship_status[0].value = result.data["relationship_status"];

    let boardname = document.getElementsByName("board_name[]");
    let passing_year = document.getElementsByName("passing_year[]");
    let percentage = document.getElementsByName("percentage[]");
    boardname.forEach((item, i) => {
      boardname[i].value = result.data["board_name"][i];
      passing_year[i].value = result.data["passing_year"][i];
      percentage[i].value = result.data["percentage"][i];
    });

    let work_experience = document.querySelector(".work_experience");
    let str = ` <legend>Work Experience</legend><input type="hidden" name="userid" value="${result.data["userid"]}">`;
    result.data["company_name"].forEach((item, i) => {
      str += ` <div class="work_experience_detail" >
        <input type="hidden" name="work_id[]" value="${result.data["work_id"][i]}">
        <div class="formfield">
            <label for="company_name">Company Name:</label>
            <input type="text" name="company_name[]"  id="company_name" value="${result.data["company_name"][i]}">
        </div>
        <div class="formfield">
            <label for="work_experience_designation">Designation</label>
            <input type="text" name="work_experience_designation[]"  id="work_experience_designation" value="${result.data["work_experience_designation"][i]}">
        </div>
        <div class="formfield">
            <label for="from">From: </label>
            <input type="text" name="from[]" placeholder="yyyy-mm-dd"  id="from" value="${result.data["from"][i]}">
        </div> 
        
        <div class="formfield">
            <label for="to">to: </label>
            <input type="text" name="to[]" placeholder="yyyy-mm-dd" id="to"  value="${result.data["to"][i]}">
        </div>
    </div>
    <hr>`;
    });

    work_experience.innerHTML = str;

    let referance = document.querySelector(".referance");
    let str2 = " <legend>Referance Contact</legend>";
    result.data["referance_name"].forEach((item, i) => {
      str2 += ` <div class="referance_detail">
        <input type="hidden" name="ref_id[]" value="${result.data["ref_id"][i]}">
        <div class="formfield">
            <label for="referance_name">Name : </label>
            <input type="text" name="referance_name[]"  id="referance_name" value="${result.data["referance_name"][i]}">
        </div>
        <div class="formfield">
            <label for="referance_number">Mobile Number : </label>
            <input type="text" name="referance_number[]"  id="referance_number" class="phonevalidate" value="${result.data["referance_number"][i]}">
        </div>
        <div class="formfield">
            <label for="referance_relation">Relation : </label>
            <input type="text" name="referance_relation[]"  id="referance_relation" value="${result.data["referance_relation"][i]}">
        </div>
    </div>
        <hr>`;
    });
    referance.innerHTML = str2;
    let prefered_location = document.getElementsByName("prefered_location");
    prefered_location[0].value = result.data["prefered_location"];
    let department = document.getElementsByName("department");
    department[0].value = result.data["department"];

    let language = document.getElementsByName("language[]");
    language.forEach((item) => {
      if (result.data["language"].includes(item.value)) {
        item.checked = true;
        if (result.data[`${item.value}_read`]) {
          document.getElementsByName(`${item.value}_read`)[0].checked = true;
        }
        if (result.data[`${item.value}_write`]) {
          document.getElementsByName(`${item.value}_write`)[0].checked = true;
        }
        if (result.data[`${item.value}_speak`]) {
          document.getElementsByName(`${item.value}_speak`)[0].checked = true;
        }
      }
    });

    let technology = document.getElementsByName("technology[]");
    technology.forEach((item) => {
      if (result.data["technology"].includes(item.value)) {
        item.checked = true;
      }
    });

    let php_level = document.getElementsByName("php_level");
    let mysql_level = document.getElementsByName("mysql_level");
    let laravel_level = document.getElementsByName("laravel_level");
    let oracle_level = document.getElementsByName("oracle_level");

    if (result.data["php_level"]) {
      php_level.forEach((item) => {
        if (item.value == result.data["php_level"]) {
          item.checked = true;
        }
      });
    }
    if (result.data["mysql_level"]) {
      mysql_level.forEach((item) => {
        if (item.value == result.data["mysql_level"]) {
          item.checked = true;
        }
      });
    }
    if (result.data["laravel_level"]) {
      laravel_level.forEach((item) => {
        if (item.value == result.data["laravel_level"]) {
          item.checked = true;
        }
      });
    }
    if (result.data["oracle_level"]) {
      oracle_level.forEach((item) => {
        if (item.value == result.data["oracle_level"]) {
          item.checked = true;
        }
      });
    }
  }
  getData();
}
