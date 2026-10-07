export type CaptureItem = {
  type: "image" | "video";
  /** File under `public/captures/<id>/`, e.g. `lobby.png`. */
  file: string;
  /** Videos only: image in the same folder shown before playback. */
  poster?: string;
  caption: string;
  /** Alt text for images, accessible label for videos. */
  alt: string;
};

export type Capture = {
  /** Matches `Deliverable.id`. */
  id: string;
  /** Git tag the screenshots/videos were captured from. */
  tag: string;
  intro: string;
  items: CaptureItem[];
};

// One entry per deliverable that links to a captures page instead of a live
// site. Each needs a matching `captures/<id>.html` page.
export const captures: Record<string, Capture> = {
  crit8: {
    id: "crit8",
    tag: "crit-8",
    intro:
      "Dead Air as it stood at the crit 8 cutoff (tag crit-8). The live app keeps changing as the final project goes on, so these are the screenshots and clip from that tagged state, recorded from a local build of the tag.",
    items: [
      {
        type: "video",
        file: "playthrough.webm",
        poster: "operator-device.png",
        alt: "Screen recording of two crew members playing Dead Air: a failed mission, then a full defuse",
        caption:
          "A full session in about 30 seconds: open a room, a teammate joins as the Expert from a second browser, a first mission is lost to three strikes, then a fresh device is defused and both runs land on the station log.",
      },
      {
        type: "image",
        file: "lobby-station-log.png",
        alt: "The Dead Air lobby with the crew terminal on the left and the station log listing a secured run and a lost run",
        caption:
          "The lobby. No accounts: a generated, editable callsign is enough to leave a trace, and the station log lists every run's crew, modules cleared, time left and strikes.",
      },
      {
        type: "image",
        file: "operator-device.png",
        alt: "The Operator's view: a live device with wire array, symbol lock, memory keypad, switch panel and override modules, a 4:59 countdown and the crew listed beside it",
        caption:
          "The Operator's seat. Devices are randomised every mission, so the Expert can't memorise answers and has to ask what's on the device.",
      },
      {
        type: "image",
        file: "expert-manual.png",
        alt: "The Expert's view: the field manual with no device shown, and both crew members listed as connected",
        caption:
          "The Expert's seat, from a second browser in the same room. The server never sends device data to this seat, so the manual is written as general rules.",
      },
      {
        type: "image",
        file: "mission-lost.png",
        alt: "The Operator's view after three strikes, with a red 'Three strikes' banner, all three strike markers filled, and the mission log listing each wrong symbol press",
        caption:
          "A lost mission: three strikes end the run, flash the console on every screen in the room, and log the run to the station.",
      },
      {
        type: "image",
        file: "device-secured.png",
        alt: "The Operator's view after a successful defuse, with a green 'Device secured' banner, all five modules cleared and 4:48 left on the clock",
        caption:
          "A secured device: all five modules cleared with the override last, 4:48 left and no strikes.",
      },
    ],
  },
};
