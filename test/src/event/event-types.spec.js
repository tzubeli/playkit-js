import EventType from '../../../src/event/event-types'
import {Html5EventType, CustomEventType, AdEventType} from '../../../src/event/event-types'
import {Obj} from '../../../src/utils/index'

function AdEvents() {
  return {
    AD_LOADED: 'adloaded',
    AD_STARTED: 'adstarted',
    AD_RESUMED: 'adresumed',
    AD_PAUSED: 'adpaused',
    AD_CLICKED: 'adclicked',
    AD_SKIPPED: 'adskipped',
    AD_COMPLETED: 'adcompleted',
    AD_ERROR: 'aderror',
    ALL_ADS_COMPLETED: 'alladscompleted',
    AD_BREAK_START: 'adbreakstart',
    AD_BREAK_END: 'adbreakend',
    AD_FIRST_QUARTILE: 'adfirstquartile',
    AD_MIDPOINT: 'admidpoint',
    AD_THIRD_QUARTILE: 'adthirdquartile',
    USER_CLOSED_AD: 'userclosedad',
    AD_VOLUME_CHANGED: 'advolumechanged',
    AD_MUTED: 'admuted',
    AD_PROGRESS: 'adprogress'
  };
}

function Html5Events() {
  return {
    ABORT: 'abort',
    CAN_PLAY: 'canplay',
    CAN_PLAY_THROUGH: 'canplaythrough',
    DURATION_CHANGE: 'durationchange',
    EMPTIED: 'emptied',
    ENDED: 'ended',
    ERROR: 'error',
    LOADED_DATA: 'loadeddata',
    LOADED_METADATA: 'loadedmetadata',
    LOAD_START: 'loadstart',
    PAUSE: 'pause',
    PLAY: 'play',
    PLAYING: 'playing',
    PROGRESS: 'progress',
    RATE_CHANGE: 'ratechange',
    SEEKED: 'seeked',
    SEEKING: 'seeking',
    STALLED: 'stalled',
    SUSPEND: 'suspend',
    TIME_UPDATE: 'timeupdate',
    VOLUME_CHANGE: 'volumechange',
    WAITING: 'waiting',
  };
}

function CustomEvents() {
  return {
    ENTER_FULLSCREEN: 'enterfullscreen',
    EXIT_FULLSCREEN: 'exitfullscreen',
    REQUESTED_ENTER_FULLSCREEN: 'requestedenterfullscreen',
    REQUESTED_EXIT_FULLSCREEN: 'requestedexitfullscreen',
    AUTOPLAY_FAILED: 'autoplayfailed',
    FALLBACK_TO_MUTED_AUTOPLAY: 'fallbacktomutedautoplay',
    CHANGE_SOURCE_STARTED: 'changesourcestarted',
    CHANGE_SOURCE_ENDED: 'changesourceended', MUTE_CHANGE: 'mutechange',
    VIDEO_TRACK_CHANGED: 'videotrackchanged',
    AUDIO_TRACK_CHANGED: 'audiotrackchanged',
    TEXT_TRACK_CHANGED: 'texttrackchanged', TEXT_CUE_CHANGED: 'textcuechanged',
    TRACKS_CHANGED: 'trackschanged',
    ABR_MODE_CHANGED: 'abrmodechanged',
    PLAYER_STATE_CHANGED: 'playerstatechanged',
    FIRST_PLAY: 'firstplay',
    SOURCE_SELECTED: 'sourceselected',
    TEXT_STYLE_CHANGED: 'textstylechanged'
  };
}

describe('event-types', () => {
  it('should equals player custom-events', () => {
    Html5EventType.should.deep.equals(Html5Events());
    CustomEventType.should.deep.equals(CustomEvents());
    AdEventType.should.deep.equals(AdEvents());
    EventType.should.deep.equals(Obj.merge([Html5Events(), CustomEvents(), AdEvents()]));
  });
});
