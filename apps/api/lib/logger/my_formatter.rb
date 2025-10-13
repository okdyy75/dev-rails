# frozen_string_literal: true

class Logger::MyFormatter < ::Logger::Formatter
  def call(severity, time, progname, msg)
    {
      severity: severity,
      timestamp: format_datetime(time),
      pid: Process.pid,
      progname:,
      message: msg2str(msg).strip
    }.to_json + "\n"
  end
end
