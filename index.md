---
layout: default
title: Reconnaissance
---

Does your Classic Mac play a sad chime or have a fault you can't figure out? Just want to check your logic board for hidden problems?

[Reconnaissance](https://github.com/recon-68k/reconnaissance-app/releases) runs on your modern machine and connects to your Classic Mac
over serial to run diagnostic tests using the Test Manager that's built into the ROM. It's like having a TechStep, but easier and more capable.

# What You Need
- [Reconnaissance App](https://github.com/recon-68k/reconnaissance-app/releases)
  - Available for macOS 14 Sonoma or later, Windows 10, and Windows 11
- [A supported Classic Macintosh computer](#supported-models)
- [USB-Serial adapter](#serial-adapters-and-cables) or a PC with an on-board serial port
- [Serial cable](#serial-adapters-and-cables)

# Quick Start
1. Run the **Reconnaissance** app
1. Choose the serial port and target Mac model
1. Connect a serial cable to the **modem port** on your Classic Mac
1. [Start your Mac in Diagnostic Mode](#starting-a-mac-in-diagnostic-mode)
1. Click **Run Standard Tests** or pick individual tests. See the [Diagnostics Reference](#diagnostics-reference) to see what's supported.
<a href="/assets/images/configuration2.png" class="glightbox">
  <img src="/assets/images/configuration2.png" alt="Screenshot of configuration showing a serial port and model selected.">
</a>

# Screenshots
{% include screenshots.md %}

# Supported Models
**Currently Supported**
- Macintosh II
- Macintosh IIcx
- Macintosh SE/30
- Macintosh IIsi
- Macintosh LC III

**Coming Soon – Under Active Development**
- Macintosh IIci
- Macintosh LC II
- Macintosh Color Classic
- Macintosh IIx
- Macintosh IIfx

# Starting a Mac in Diagnostic Mode
**Sad chime or no chime during power on/reset**
* If your Mac plays a Sad Mac chime on startup, it will automatically enter Diagnostic Mode.
* If your Mac does not chime at all, it may still have automatically entered Diagnostic Mode.

**Happy (normal) chime**
1. Power on (or reset)
1. While the startup chime plays:
   * Press the programmer interrupt button, if your Mac has one.
   * Otherwise, press ⌘ ◁ (Command+Power) on the keyboard.
1. A Sad Mac chime will play and your Mac is now in Diagnostic Mode.

# Diagnostics Reference
{% include test-reference.md %}

# Questions and Answers
I'm not sure what the result of a test means.
: Double-check the [Diagnostics Reference](#diagnostics-reference) and get help over on [TinkerDifferent](https://tinkerdifferent.com/forums/macintosh.28/){:target="_blank"}.

I know my logic board has a fault but all of the tests are passing!
: Oh no! Discuss it over on [TinkerDifferent](https://tinkerdifferent.com/forums/macintosh.28/).

How can I see what **Reconnaissance** is doing behind the scenes?
: The **File** menu has commands to reveal log files so you can see the commands and responses between the app and target Mac.

I have an idea, feedback, or a bug to report.
: Head over to [Reconnaissance Issues Page](https://github.com/recon-68k/reconnaissance-app/issues) or in the app, choose **Help > Send Feedback**.

Can I develop custom diagnostics?
: The toolchain for developing custom diagnostic plugins on modern machines will be available soon! Custom diagnostics can be written in 68K assembly, C, or a mix of both.

Can I interact with the test manager using a terminal program?
: Yes, you can run some basic tests this way. See the [Additional References](#additional-references) section for more information. Running tests manually can be challenging because some tests expect that test commands are run in a specific sequence.

Will there be a Linux version?
: Yes, a Linux version is under development.

Is the project open source?
: Absolutely! Full source code will be available soon.

# Serial Adapters and Cables
You will need an appropriate serial cable to connect your Mac's Mini-DIN-8 modem port to your USB-Serial adapter, which almost certainly has a DE-9 male port (often referred to as a DB-9 port).

> [Check out this TinkerDifferent post with links to serial adapters, cable parts, and premade cables.](https://tinkerdifferent.com/forums/macintosh.28/){:target="_blank"}
{: .callout-tip}

If you're making your own cable, see the [Cable Pinout Reference](#serial-cable-pinout-reference).

# Serial Cable Pinout Reference
{% include cable-pinout.md %}

# Additional References
* [Mac Built-In Diagnostics](https://youtu.be/W1biFIdQZDw?si=d-UpM9dqO4ceqDeU){:target="_blank"} — Adrian Black (YouTube)
* [Macintosh Diagnostics / Test Manager Notes](https://docs.google.com/spreadsheets/d/1zsc7ET5fyiOYWj1_AzOgafbrCVFED-7jzLH6ruCiAVE/){:target="_blank"} — Adrian Black (Google Sheets)
* [Diagnostics Mode documentation](https://web.archive.org/web/20210516085835/https://mac68k.info/wiki/display/mac68k/Diagnostic+Mode){:target="_blank"} — Rob Braun (via Internet Archive)
