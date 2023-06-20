$(document).ready(function() {
    // При нажатии на кнопку "Добавить"
    $("#add-btn").click(function() {
      var task = $("#new-task").val();
      
      // Проверка на пустую задачу
      if (task === '') {
        alert("Пожалуйста, введите задачу.");
        return false;
      }
      
      var listItem = $("<li><input type='checkbox'><span>" + task + "</span><input type='text' value='" + task + "'></li>");
      $(".todo-list").append(listItem);
      $("#new-task").val("");
      updateTaskCount();
    });
    
    // При нажатии на задачу в списке
    $(document).on("click", ".todo-list li", function() {
      $(this).toggleClass("completed");
      updateTaskCount();
    });
    
    // При двойном клике на задаче в списке
    $(document).on("dblclick", ".todo-list li", function() {
      $(this).toggleClass("editing");
      var input = $(this).find("input[type='text']");
      var span = $(this).find("span");
      
      if ($(this).hasClass("editing")) {
        input.val(span.text());
        input.focus();
      } else {
        span.text(input.val());
      }
    });
    
    // При нажатии на кнопку "Удалить"
    $(document).on("click", ".todo-list input[type='checkbox']", function() {
      $(this).parent().remove();
      updateTaskCount();
    });
    
    // Функция обновления количества задач
    function updateTaskCount() {
      var totalCount = $(".todo-list li").length;
      var completedCount = $(".todo-list li.completed").length;
      $("#total-count").text("Общее количество задач: " + totalCount);
      $("#completed-count").text("Количество выполненных задач: " + completedCount);
    }
  });