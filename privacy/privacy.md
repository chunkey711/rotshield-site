# Privacy Policy — Rotshield

**Effective [EFFECTIVE DATE]**

## The short version

Rotshield has no server, no account, and no analytics. Nothing you do in the app is sent anywhere. Everything it knows lives in a container on your iPhone, and deleting the app deletes all of it.

That is not a statement of intent. It is a description of the build: there is no code in Rotshield that sends your data anywhere.

## Who is responsible

Rotshield is made by **[LEGAL NAME]**, a sole proprietor registered in Poland (NIP [TAX ID]).
Registered address: [REGISTERED ADDRESS].
Email: [CONTACT EMAIL].

Under the GDPR that makes me the data controller. Under the EU Digital Services Act I am a trader, which is why the details above are published rather than kept private.

## What Rotshield collects

Nothing. I receive no data from the app: no usage statistics, no crash reports, no identifiers, no email address, no purchase history. There is no login, so there is no account for me to look at.

## What stays on your device

Rotshield keeps its state in a private app group container on the phone (`group.com.ruslan.rotshield`). It never leaves the device.

- **Your rules** — name, type (schedule, all day, or daily limit), days of the week, times, limit length, on or off.
- **Which apps a rule covers** — opaque tokens, not app names. See below.
- **Settings** — your daily screen time goal, your answers to the onboarding questions, and a few flags that remember what you have already been asked or shown, including whether the app is unlocked.
- **Focus timer** — the running session and when it ends, plus the durations you used recently.
- **Access window** — while a 15-minute window is open: which rules it covers and when it closes.
- **Check-ins** — if you take the "why open it?" challenge: the reason you picked, the note you typed, the mood number, and a timestamp. The last 200 are kept; older ones drop off.
- **Counters** — how many times you turned back today, and which screen time thresholds today has crossed.

You can change or remove any of this inside the app — edit a rule, delete a rule, end a session. To erase all of it at once, delete Rotshield from your phone: iOS destroys the container, and everything above goes with it.

## About the apps you block

You choose them in Apple's own picker, and iOS hands the app back opaque tokens — not names, not bundle identifiers, not icons. Rotshield cannot tell which apps you picked. When you see an app's name or icon on a shield or in a rule, the system is drawing it, not the app.

## About your screen time numbers

The per-app breakdown on the Today screen is drawn by a `DeviceActivityReport` extension — a small, separate, sandboxed process that Apple runs to display Screen Time data.

Apple's sandbox does not let that extension write its results anywhere: not to a file, not to shared storage, not over the network. The numbers are computed, drawn on screen, and discarded. The main app never receives them, so neither do I, and neither does anyone else.

The one number the app itself knows is a rough daily total. Rotshield asks iOS to tell it when your screen time passes 15 minutes, 30, 45, and so on, and remembers the highest threshold crossed today. That marker is stored on the device along with everything else.

## Notifications

Rotshield sends local notifications only — scheduled and delivered by iOS on your phone. There is no push server, and the app never registers for a push token.

There are three: your 15-minute window has closed, your focus session is finished, and a tap-through when you press "Unlock" on a shield. Notifications are optional, and blocking works exactly the same if you decline them.

## Apple

Rotshield is distributed through the App Store. When you download it, Apple collects what Apple collects for any download. That is between you and Apple, under Apple's privacy policy. What reaches me from it is an aggregate, anonymous download count — nothing that identifies you.

Screen Time permission is granted to Apple's system frameworks, not to me. You can withdraw it at any time in iOS Settings, under Screen Time.

## Third parties

None. No analytics, no crash reporting, no advertising, no attribution SDKs, no trackers. Rotshield does not track you across apps or websites, and version 1.0 has nothing to sell — there are no purchases and no subscription.

The app contains two ordinary links: Apple's standard licence terms, and this page. Tapping one opens Safari, and from there the usual rules of the web apply.

## Your rights under the GDPR

You have the right to access, correct, delete, restrict, object to, and port your personal data, and to complain to a supervisory authority.

Here those rights are unusually easy to exercise, because I hold nothing:

- **Access and portability** — there is nothing for me to send you. Your data is on your phone.
- **Correction and deletion** — edit or delete it in the app; delete the app to erase everything at once.
- **Objection and restriction** — there is no processing to object to or restrict.

If you think that is wrong, write to [CONTACT EMAIL] and I will answer. You can also complain to the Polish data protection authority (Prezes Urzędu Ochrony Danych Osobowych, uodo.gov.pl) or to the authority where you live.

## Children

Rotshield is for adults who want to limit themselves. It is not a parental control, and it is not directed at children. I do not knowingly hold data about anyone, children included.

## Changes to this policy

If this policy changes, the updated version appears on this page with a new date at the top, and anything substantive is mentioned in the app's release notes. There is no mailing list — I do not have your address.

## Contact

[CONTACT EMAIL] — [LEGAL NAME], [REGISTERED ADDRESS], Poland.
