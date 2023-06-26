class ReferralMailer < ApplicationMailer
  def referral_email(email)
    @email = email
    @signup_url = new_user_registration_url

    mail(to: email, subject: 'Invitation to Sign Up')
  end
end