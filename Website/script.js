 $(document).ready(function() {
      $("#message-form").submit(function(event) {
        event.preventDefault();

        const message = $("#message").val();

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycby58Slfn9aowrak0S-y8rYClkKO2cizBl89etSNDBXA4mWQy1IqtL0NetGEfeSylyw/exec");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = function() {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.result === "success") {
              $("#message").val("");
              alert("Message Sent!"); // Optional: Show a success message
             window.location.reload();
            } else {
              alert("Error sending message: " + response.error);
            }
          } else {
            alert("Error sending message: " + xhr.statusText);
          }
        };
        const data = encodeURIComponent("message") + "=" + encodeURIComponent(message);
        xhr.send(data);
      });
    });