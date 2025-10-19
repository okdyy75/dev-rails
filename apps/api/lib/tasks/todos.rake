namespace :todos do
  desc "Export todos to Markdown"
  task export_markdown: :environment do
    output_file = Rails.root.join("tmp/Todoリスト.md")
    File.open(output_file, "w") do |file|
      file.puts "# Todoリスト"
      Todo.order(:id).each do |todo|
        checkbox = todo.completed? ? "[x]" : "[ ]"
        file.puts "- #{checkbox} #{todo.title}"
      end
    end
    puts "✅ Todoを Markdown にエクスポートしました: #{output_file}"
  end
end
