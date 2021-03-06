class ContactUsMailer < ActionMailer::Base

  default from: "customer@#{ENV['DOMAIN']}"
  default to: ENV['MAIL_USERNAME']

  def new_message(message)
  	@message = message
  	mail(subject: "#{message.subject}")
  end
  
end
