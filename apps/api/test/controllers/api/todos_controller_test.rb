require "test_helper"

class Api::TodosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @todo = todos(:one)
  end

  test "should get index" do
    get api_todos_url, as: :json
    assert_response :success

    body = JSON.parse(response.body)
    assert_equal Todo.count, body.length
  end

  test "should show todo" do
    get api_todo_url(@todo), as: :json
    assert_response :success

    body = JSON.parse(response.body)
    assert_equal @todo.id, body["id"]
  end

  test "should create todo" do
    assert_difference("Todo.count") do
      post api_todos_url,
           params: { todo: { title: "Created todo", description: "Details" } },
           as: :json
    end

    assert_response :created
  end

  test "should update todo" do
    patch api_todo_url(@todo),
          params: { todo: { title: "Updated title", completed: true } },
          as: :json
    assert_response :success

    @todo.reload
    assert_equal "Updated title", @todo.title
    assert @todo.completed
  end

  test "should destroy todo" do
    assert_difference("Todo.count", -1) do
      delete api_todo_url(@todo), as: :json
    end

    assert_response :no_content
  end
end
