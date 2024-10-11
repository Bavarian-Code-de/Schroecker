<form id="contactForm" action="#contact" method="post">
    <?php echo "<p style='color: #FFFFFF;'>$errormsg</p>"; ?>
    <div class="row align-items-stretch mb-5">
        <div class="col-md-6">
            <div class="form-group">
                <!-- Name input-->
                <input class="form-control" id="name_id" name="name" type="text" placeholder="Ihr Name *" value="<?php echo $name ?? ''; ?>" />
                <div class="invalid-feedback">Name wird benötigt</div>
            </div>
            <div class="form-group">
                <!-- Email address input-->
                <input class="form-control" id="email_id" name="email" type="email" placeholder="Ihre Email *" value="<?php echo $email ?? ''; ?>" />
                <div class="invalid-feedback">Email wird benötigt</div>
                <div class="invalid-feedback">Email ist ungültig</div>
            </div>
            <div class="form-group mb-md-0">
                <!-- Phone number input-->
                <input class="form-control" id="phone_id" name="phone" type="tel" placeholder="Ihre Telefonnummer *" value="<?php echo $phone ?? ''; ?>" />
                <div class="invalid-feedback">Telefonnummer wird benötigt</div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
                <!-- Message input-->
                <textarea class="form-control" id="message_id" name="message" placeholder="Ihre Nachricht *" value="<?php echo $message ?? ''; ?>"></textarea>
                <div class="invalid-feedback">Nachricht wird benötigt</div>
            </div>
        </div>
    </div>

    <div class="d-none" id="submitErrorMessage">
        <div class="text-center text-danger mb-3">Error sending message!</div>
    </div>
    <!-- Submit Button-->
    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="" name="contact-form" type="submit">Nachricht senden</button></div>
</form>