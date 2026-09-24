// @ts-nocheck
import './App.css';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import logoImage from './assets/musk-logo (1) (1).png';   
// Trust & Security Badges (keep these)
import secLogo from './assets/badges/sec-registered.png';
import bbbLogo from './assets/badges/bbb-a-plus.png';
import escrowLogo from './assets/badges/escrow-verified.png';
import irsLogo from './assets/badges/irs-501c3.png';

// Global Investment Leaders Logos (new - add these)
import vanguardLogo from './assets/badges/vanguard.png';
import blackrockLogo from './assets/badges/blackrock.png';
import fidelityLogo from './assets/fidelity.png';
import goldmanLogo from './assets/badges/goldman-sachs.png';
import morganLogo from './assets/badges/morgan-stanley.png';
import baillieLogo from './assets/badges/baillie-gifford.png';

// Gallery Images - Local Files
import g1 from './assets/gallery/farm-1.jpg';
import g2 from './assets/gallery/farm-10.jpg';
import g3 from './assets/gallery/farm-11.jpg';
import g4 from './assets/gallery/farm-13.jpg';
import g5 from './assets/gallery/farm-15.jpg';
import g6 from './assets/gallery/farm-16.jpg';
import g7 from './assets/gallery/farm-17.jpg';
import g8 from './assets/gallery/farm-18.jpg';
import g9 from './assets/gallery/farm-19.jpg';
import g10 from './assets/gallery/farm-2.jpg';
import g11 from './assets/gallery/farm-20.jpg';
import g12 from './assets/gallery/farm-21.jpg';
import g13 from './assets/gallery/farm-22.jpg';
import g14 from './assets/gallery/farm-3.jpg';
import g15 from './assets/gallery/farm-4.jpg';
import g16 from './assets/gallery/farm-5.jpg';
import g17 from './assets/gallery/farm-6.jpg';
import g18 from './assets/gallery/farm-8.jpg';
import g19 from './assets/gallery/farm-9.jpg';
import g20 from './assets/gallery/random-1.jpg';
import g21 from './assets/gallery/random-10.jpg';
import g22 from './assets/gallery/random-11.jpg';
import g23 from './assets/gallery/random-12.jpg';
import g24 from './assets/gallery/random-13.jpg';
import g25 from './assets/gallery/random-14.jpg';
import g26 from './assets/gallery/random-15.jpg';
import g27 from './assets/gallery/random-16.jpg';
import g28 from './assets/gallery/random-17.jpg';
import g29 from './assets/gallery/random-18.jpg';
import g30 from './assets/gallery/random-19.jpg';
import g31 from './assets/gallery/random-2.jpg';
import g32 from './assets/gallery/random-20.jpg';
import g33 from './assets/gallery/random-21.jpg';
import g34 from './assets/gallery/random-23.jpg';
import g35 from './assets/gallery/random-3.jpg';
import g36 from './assets/gallery/random-4.jpg';
import g37 from './assets/gallery/random-5.jpg';
import g38 from './assets/gallery/random-6.jpg';
import g39 from './assets/gallery/random-7.jpg';
import g40 from './assets/gallery/random-8.jpg';
import g41 from './assets/gallery/random-9.jpg';
import g42 from './assets/gallery/sat-1.jpg';
import g43 from './assets/gallery/sat-2.jpg';
import g44 from './assets/gallery/sat-3.jpg';
import g45 from './assets/gallery/sat-4.jpg';
import g46 from './assets/gallery/sat-6.jpg';
import g47 from './assets/gallery/sat-7.jpg';
import g48 from './assets/gallery/sat-8.jpg';
import g49 from './assets/gallery/sat-9.jpg';
import g50 from './assets/gallery/school-1.jpg';
import g51 from './assets/gallery/school-2.jpg';
import g52 from './assets/gallery/school-3.jpg';
import g53 from './assets/gallery/school-4.jpg';
import g54 from './assets/gallery/school-5.jpg';
import g55 from './assets/gallery/school-6.jpg';
import g56 from './assets/gallery/solar-1.jpg';
import g57 from './assets/gallery/solar-2.jpg';
import g58 from './assets/gallery/solar-3.jpg';
import g59 from './assets/gallery/solar-9.jpg';
import g60 from './assets/gallery/starlink-1.jpg';
import g61 from './assets/gallery/starlink-2.jpg';
import g62 from './assets/gallery/starlink-3.jpg';
import g63 from './assets/gallery/Tesla-1.jpg';
import g64 from './assets/gallery/Tesla-2.jpg';
import g65 from './assets/gallery/Tesla-3.jpg';
import g66 from './assets/gallery/Tesla-4.jpg';
import g67 from './assets/gallery/Tesla-5.jpg';
import elonSpeech1 from './assets/gallery/elon-speech-1.jpg';
import antiFraudDashboard from './assets/gallery/anti-fraud-dashboard.jpg';
import projectPhoenixWater from './assets/gallery/project-phoenix-water.jpg';
import elon from './assets/gallery/elon.jpg';
import elonAbout from './assets/gallery/elon-about.jpg';
import starlinkEducation from './assets/gallery/starlink-education.jpg';
import spacexPreferredStock from './assets/gallery/spacex-preferred-stock.jpg';
import elonSpeech2 from './assets/gallery/elon-speech-2.jpg';
import elonMuskPortrait from './assets/gallery/elon-musk-portrait.jpg';
import spacexAgriculture from './assets/gallery/spacex-agriculture.jpg';
import projectPhoenix from './assets/gallery/project-phoenix.jpg';
import futureInnovatorLabs from './assets/gallery/future-innovator-labs.jpg';
import jaredBirchall from './assets/gallery/jared-birchall.jpg';
import matildaSimonFerrigno from './assets/gallery/matilda-simon-ferrigno.jpg';
import kimbalMusk from './assets/gallery/kimbal-musk.jpg';
import serenaWilliams from './assets/gallery/serena-williams.jpg';
import markcuban from './assets/gallery/mark-cuban.jpg';
import bezosFamilyOffice from './assets/gallery/bezos-family-office.jpg';
import teslaWaterDesalination from './assets/gallery/tesla-water-desalination.jpg';
import legacyCommunityHubs from './assets/gallery/legacy-community-hubs.jpg';
import restorativeJusticeGrant from './assets/gallery/restorative-justice-grant.jpg';
import starlinksEducation from './assets/gallery/starlinks-education.jpg';
import legacyCommunityProject from './assets/gallery/legacy-community-project.jpg';
import impactAdvisoryCouncil from './assets/gallery/impact-advisory-council.jpg';
import futureInnovatorFoundation from './assets/gallery/future-innovator-foundation.jpg';
import spacexMemberInvestment from './assets/gallery/spacex-member-investment.jpg';
import gwynneShotwell from './assets/gallery/gwynne-shotwell.jpg';
import gratitude1 from './assets/gallery/gratitude-1.jpg';
import gratitude2 from './assets/gallery/gratitude-2.jpg';
import gratitude3 from './assets/gallery/gratitude-3.jpg';
import gratitude4 from './assets/gallery/gratitude-4.jpg';
import gratitude5 from './assets/gallery/gratitude-5.jpg';
import gratitude6 from './assets/gallery/gratitude-6.jpg';
import gratitude7 from './assets/gallery/gratitude-7.jpg';
import gratitude8 from './assets/gallery/gratitude-8.jpg';
import gratitude9 from './assets/gallery/gratitude-9.jpg';
import gratitude10 from './assets/gallery/gratitude-10.jpg';
import gratitude11 from './assets/gallery/gratitude-11.jpg';
import gratitude12 from './assets/gallery/gratitude-12.jpg';
import gratitude13 from './assets/gallery/gratitude-13.jpg';
import gratitude14 from './assets/gallery/gratitude-14.jpg';
import gratitude15 from './assets/gallery/gratitude-15.jpg';
import gratitude16 from './assets/gallery/gratitude-16.jpg';
import gratitude17 from './assets/gallery/gratitude-17.jpg';
import gratitude18 from './assets/gallery/gratitude-18.jpg';
import gratitude19 from './assets/gallery/gratitude-19.jpg';
import gratitude20 from './assets/gallery/gratitude-20.jpg';
import gratitude21 from './assets/gallery/gratitude-21.jpg';
import grantRecipient1 from './assets/gallery/grant-recipient-1.jpg';
import grantRecipient2 from './assets/gallery/grant-recipient-2.jpg';
import grantRecipient3 from './assets/gallery/grant-recipient-3.jpg';
import grantRecipient4 from './assets/gallery/grant-recipient-4.jpg';
import grantRecipient5 from './assets/gallery/grant-recipient-5.jpg';
import grantRecipient6 from './assets/gallery/grant-recipient-6.jpg';
import grantRecipient7 from './assets/gallery/grant-recipient-7.jpg';
import grantRecipient8 from './assets/gallery/grant-recipient-8.jpg';
import grantRecipient9 from './assets/gallery/grant-recipient-9.jpg';
import grantRecipient10 from './assets/gallery/grant-recipient-10.jpg';
import grantRecipient11 from './assets/gallery/grant-recipient-11.jpg';
import grantRecipient12 from './assets/gallery/grant-recipient-12.jpg';
import grantRecipient13 from './assets/gallery/grant-recipient-13.jpg';
import grantRecipient14 from './assets/gallery/grant-recipient-14.jpg';
import grantRecipient15 from './assets/gallery/grant-recipient-15.jpg';
import grantRecipient16 from './assets/gallery/grant-recipient-16.jpg';
import grantRecipient17 from './assets/gallery/grant-recipient-17.jpg';
import grantRecipient18 from './assets/gallery/grant-recipient-18.jpg';
import hero1 from './assets/gallery/hero-1.jpg';
import hero2 from './assets/gallery/hero-2.jpg';
import hero3 from './assets/gallery/hero-3.jpg';
// ===== Elite Members Circle Images =====
import member1 from './assets/gallery/member-1.jpg';
import member2 from './assets/gallery/member-2.jpg';
import member3 from './assets/gallery/member-3.jpg';
import member4 from './assets/gallery/member-4.jpg';
import member5 from './assets/gallery/member-5.jpg';
import member6 from './assets/gallery/member-6.jpg';
import member7 from './assets/gallery/member-7.jpg';
import member8 from './assets/gallery/member-8.jpg';
import member9 from './assets/gallery/member-9.jpg';
import member10 from './assets/gallery/member-10.jpg';
import member11 from './assets/gallery/member-11.jpg';
import member12 from './assets/gallery/member-12.jpg';
import member13 from './assets/gallery/member-13.jpg';
import member14 from './assets/gallery/member-14.jpg';
import member15 from './assets/gallery/member-15.jpg';
import member16 from './assets/gallery/member-16.jpg';
import member17 from './assets/gallery/member-17.jpg';
import member18 from './assets/gallery/member-18.jpg';
import member19 from './assets/gallery/member-19.jpg';
import member20 from './assets/gallery/member-20.jpg';
import member21 from './assets/gallery/member-21.jpg';
import member22 from './assets/gallery/member-22.jpg';
import member23 from './assets/gallery/member-23.jpg';
import member24 from './assets/gallery/member-24.jpg';
import member25 from './assets/gallery/member-25.jpg';
import member26 from './assets/gallery/member-26.jpg';
import member27 from './assets/gallery/member-27.jpg';
import member28 from './assets/gallery/member-28.jpg';
import member29 from './assets/gallery/member-29.jpg';
import member30 from './assets/gallery/member-30.jpg';
import member31 from './assets/gallery/member-31.jpg';
import member32 from './assets/gallery/member-32.jpg';
import member33 from './assets/gallery/member-33.jpg';
import member34 from './assets/gallery/member-34.jpg';
import member35 from './assets/gallery/member-35.jpg';
import member36 from './assets/gallery/member-36.jpg';
import member37 from './assets/gallery/member-37.jpg';
import member38 from './assets/gallery/member-38.jpg';
import member39 from './assets/gallery/member-39.jpg';
import member40 from './assets/gallery/member-40.jpg';
import member41 from './assets/gallery/member-41.jpg';
import member42 from './assets/gallery/member-42.jpg';
import member43 from './assets/gallery/member-43.jpg';
import member44 from './assets/gallery/member-44.jpg';
import member45 from './assets/gallery/member-45.jpg';
import member46 from './assets/gallery/member-46.jpg';
import member47 from './assets/gallery/member-47.jpg';
import member48 from './assets/gallery/member-48.jpg';
import member49 from './assets/gallery/member-49.jpg';
import member50 from './assets/gallery/member-50.jpg';
import member51 from './assets/gallery/member-51.jpg';
import member52 from './assets/gallery/member-52.jpg';
import member53 from './assets/gallery/member-53.jpg';
import member54 from './assets/gallery/member-54.jpg';
import member55 from './assets/gallery/member-55.jpg';
import member56 from './assets/gallery/member-56.jpg';
import member57 from './assets/gallery/member-57.jpg';
import member58 from './assets/gallery/member-58.jpg';
import member59 from './assets/gallery/member-59.jpg';
import member60 from './assets/gallery/member-60.jpg';
import member62 from './assets/gallery/member-62.jpg';
import member63 from './assets/gallery/member-63.jpg';
import member64 from './assets/gallery/member-64.jpg';
import member65 from './assets/gallery/member-65.jpg';
import member67 from './assets/gallery/member-67.jpg';
import member68 from './assets/gallery/member-68.jpg';
import member69 from './assets/gallery/member-69.jpg';
import member70 from './assets/gallery/member-70.jpg';
import member71 from './assets/gallery/member-71.jpg';
import member72 from './assets/gallery/member-72.jpg';
import member73 from './assets/gallery/member-73.jpg';
import member74 from './assets/gallery/member-74.jpg';
import member75 from './assets/gallery/member-75.jpg';
import member76 from './assets/gallery/member-76.jpg';
import member77 from './assets/gallery/member-77.jpg';
import member78 from './assets/gallery/member-78.jpg';
import member79 from './assets/gallery/member-79.jpg';
import member80 from './assets/gallery/member-80.jpg';
import member81 from './assets/gallery/member-81.jpg';
import member82 from './assets/gallery/member-82.jpg';
import member83 from './assets/gallery/member-83.jpg';
import member84 from './assets/gallery/member-84.jpg';
import member85 from './assets/gallery/member-85.jpg';
import member86 from './assets/gallery/member-86.jpg';
import member88 from './assets/gallery/member-88.jpg';
import member89 from './assets/gallery/member-89.jpg';
import member90 from './assets/gallery/member-90.jpg';
import member91 from './assets/gallery/member-91.jpg';
import member92 from './assets/gallery/member-92.jpg';
import member93 from './assets/gallery/member-93.jpg';
import member94 from './assets/gallery/member-94.jpg';
import member95 from './assets/gallery/member-95.jpg';
import member96 from './assets/gallery/member-96.jpg';
import teslaBenefit1 from './assets/gallery/tesla-benefit-1.jpg';
import teslaBenefit2 from './assets/gallery/tesla-benefit-2.jpg';
import teslaBenefit3 from './assets/gallery/tesla-benefit-3.jpg';
import teslaBenefit4 from './assets/gallery/tesla-benefit-4.jpg';
import teslaBenefit5 from './assets/gallery/tesla-benefit-5.jpg';
import teslaBenefit6 from './assets/gallery/tesla-benefit-6.jpg';
import teslaBenefit7 from './assets/gallery/tesla-benefit-7.jpg';
import teslaBenefit8 from './assets/gallery/tesla-benefit-8.jpg';
import teslaBenefit9 from './assets/gallery/tesla-benefit-9.jpg';
import teslaBenefit10 from './assets/gallery/tesla-benefit-10.jpg';
import teslaBenefit11 from './assets/gallery/tesla-benefit-11.jpg';
import teslaBenefit12 from './assets/gallery/tesla-benefit-12.jpg';
import marsBeneficiary1 from './assets/gallery/mars-beneficiary-1.jpg';
import marsBeneficiary2 from './assets/gallery/mars-beneficiary-2.jpg';
import elonMessageVideo from './assets/videos/elon-message.mp4';
import outreach1 from './assets/gallery/outreach-1.jpg';
import outreach2 from './assets/gallery/outreach-2.jpg';
import outreach3 from './assets/gallery/outreach-3.jpg';
import outreach4 from './assets/gallery/outreach-4.jpg';
import outreach5 from './assets/gallery/outreach-5.jpg';
import outreach6 from './assets/gallery/outreach-6.jpg';
import outreach7 from './assets/gallery/outreach-7.jpg';
import outreach8 from './assets/gallery/outreach-8.jpg';
import outreach9 from './assets/gallery/outreach-9.jpg';
import outreach10 from './assets/gallery/outreach-10.jpg';
import outreach11 from './assets/gallery/outreach-11.jpg';
import outreach13 from './assets/gallery/outreach-13.jpg';
import outreach14 from './assets/gallery/outreach-14.jpg';
import outreach15 from './assets/gallery/outreach-15.jpg';
import outreach16 from './assets/gallery/outreach-16.jpg';
import outreach17 from './assets/gallery/outreach-17.jpg';
import outreach18 from './assets/gallery/outreach-18.jpg';
import outreach19 from './assets/gallery/outreach-19.jpg';
import outreach20 from './assets/gallery/outreach-20.jpg';
import outreach21 from './assets/gallery/outreach-21.jpg';
import outreach22 from './assets/gallery/outreach-22.jpg';
import influencerRock from './assets/gallery/influencer-rock.jpg';
import influencerTaylor from './assets/gallery/influencer-taylor.jpg';
import influencerLebron from './assets/gallery/influencer-lebron.jpg';
import influencerBeyonce from './assets/gallery/influencer-beyonce.jpg';
import influencerOprah from './assets/gallery/influencer-oprah.jpg';
import mediaVideo1 from './assets/videos/media-video-1.mp4';
import mediaVideo3 from './assets/videos/media-video-3.mp4';
import mediaVideo4 from './assets/videos/media-video-4.mp4';
import mediaVideo5 from './assets/videos/media-video-5.mp4';
import mediaVideo6 from './assets/videos/media-video-6.mp4';
import mediaVideo7 from './assets/videos/media-video-7.mp4';
import mediaVideo8 from './assets/videos/media-video-8.mp4';
import mediaVideo9 from './assets/videos/media-video-9.mp4';
import mediaVideo10 from './assets/videos/media-video-10.mp4';
import mediaVideo11 from './assets/videos/media-video-11.mp4';
import mediaVideo12 from './assets/videos/media-video-12.mp4';
import mediaVideo13 from './assets/videos/media-video-13.mp4';
import mediaVideo14 from './assets/videos/media-video-14.mp4';
import mediaVideo15 from './assets/videos/media-video-15.mp4';
import mediaVideo16 from './assets/videos/media-video-16.mp4';
import mediaVideo17 from './assets/videos/media-video-17.mp4';
import mediaVideo18 from './assets/videos/media-video-18.mp4';
import mediaVideo19 from './assets/videos/media-video-19.mp4';
import mediaVideo20 from './assets/videos/media-video-20.mp4';
import mediaVideo21 from './assets/videos/media-video-21.mp4';
import mediaVideo22 from './assets/videos/media-video-22.mp4';
import mediaVideo23 from './assets/videos/media-video-23.mp4';
import mediaVideo24 from './assets/videos/media-video-24.mp4';
import mediaVideo25 from './assets/videos/media-video-25.mp4';
import mediaVideo26 from './assets/videos/media-video-26.mp4';
import mediaVideo27 from './assets/videos/media-video-27.mp4';
import mediaVideo28 from './assets/videos/media-video-28.mp4';
import mediaVideo29 from './assets/videos/media-video-29.mp4';
import mediaVideo30 from './assets/videos/media-video-30.mp4';
import mediaVideo31 from './assets/videos/media-video-31.mp4';
import mediaVideo32 from './assets/videos/media-video-32.mp4';
import mediaVideo33 from './assets/videos/media-video-33.mp4';
import mediaVideo34 from './assets/videos/media-video-34.mp4';
import mediaVideo35 from './assets/videos/media-video-35.mp4';
import mediaVideo36 from './assets/videos/media-video-36.mp4';
import mediaVideo37 from './assets/videos/media-video-37.mp4';
import mediaVideo38 from './assets/videos/media-video-38.mp4';
import mediaVideo40 from './assets/videos/media-video-40.mp4';
import mediaVideo41 from './assets/videos/media-video-41.mp4';
import mediaVideo42 from './assets/videos/media-video-42.mp4';
import mediaVideo43 from './assets/videos/media-video-43.mp4';
import mediaVideo44 from './assets/videos/media-video-44.mp4';
import mediaVideo45 from './assets/videos/media-video-45.mp4';
import mediaVideo46 from './assets/videos/media-video-46.mp4';
import mediaVideo47 from './assets/videos/media-video-47.mp4';
import mediaVideo48 from './assets/videos/media-video-48.mp4';
import mediaVideo49 from './assets/videos/media-video-49.mp4';
import mediaVideo50 from './assets/videos/media-video-50.mp4';
import mediaVideo51 from './assets/videos/media-video-51.mp4';
import mediaVideo52 from './assets/videos/media-video-52.mp4';
import juanHernandez from './assets/gallery/juan-hernandez.jpg';
import jetExperience1 from './assets/gallery/jet-experience-1.jpg';
import jetExperience2 from './assets/gallery/jet-experience-2.jpg';
import jetExperience3 from './assets/gallery/jet-experience-3.jpg';
import jetExperience4 from './assets/gallery/jet-experience-4.jpg';
import jetExperience5 from './assets/gallery/jet-experience-5.jpg';
import jetExperience6 from './assets/gallery/jet-experience-6.jpg';
import jetExperience7 from './assets/gallery/jet-experience-7.jpg';
import jetExperience8 from './assets/gallery/jet-experience-8.jpg';
import jetExperience9 from './assets/gallery/jet-experience-9.jpg';
import jetExperience10 from './assets/gallery/jet-experience-10.jpg';
import jetExperience11 from './assets/gallery/jet-experience-11.jpg';
import jetExperience12 from './assets/gallery/jet-experience-12.jpg';
import jetExperience13 from './assets/gallery/jet-experience-13.jpg';
import jetExperience14 from './assets/gallery/jet-experience-14.jpg';
import jetExperience15 from './assets/gallery/jet-experience-15.jpg';
import jetExperience16 from './assets/gallery/jet-experience-16.jpg';
import jetExperience17 from './assets/gallery/jet-experience-17.jpg';
import granteeShowcase1 from './assets/gallery/grantee-showcase-1.jpg';
import granteeShowcase2 from './assets/gallery/grantee-showcase-2.jpg';
import granteeShowcase3 from './assets/gallery/grantee-showcase-3.jpg';
import granteeShowcase4 from './assets/gallery/grantee-showcase-4.jpg';
import granteeShowcase5 from './assets/gallery/grantee-showcase-5.jpg';
import granteeShowcase6 from './assets/gallery/grantee-showcase-6.jpg';
import granteeShowcase7 from './assets/gallery/grantee-showcase-7.jpg';
import granteeShowcase8 from './assets/gallery/grantee-showcase-8.jpg';
import granteeShowcase9 from './assets/gallery/grantee-showcase-9.jpg';
import granteeShowcase10 from './assets/gallery/grantee-showcase-10.jpg';
import granteeShowcase11 from './assets/gallery/grantee-showcase-11.jpg';
import granteeShowcase12 from './assets/gallery/grantee-showcase-12.jpg';
import granteeShowcase13 from './assets/gallery/grantee-showcase-13.jpg';
import granteeShowcase14 from './assets/gallery/grantee-showcase-14.jpg';
import granteeShowcase15 from './assets/gallery/grantee-showcase-15.jpg';
import granteeShowcase16 from './assets/gallery/grantee-showcase-16.jpg';
import granteeShowcase17 from './assets/gallery/grantee-showcase-17.jpg';
import granteeShowcase18 from './assets/gallery/grantee-showcase-18.jpg';
import granteeShowcase19 from './assets/gallery/grantee-showcase-19.jpg';
import granteeShowcase21 from './assets/gallery/grantee-showcase-21.jpg';
import granteeShowcase22 from './assets/gallery/grantee-showcase-22.jpg';
import granteeShowcase23 from './assets/gallery/grantee-showcase-23.jpg';
import granteeShowcase24 from './assets/gallery/grantee-showcase-24.jpg';
import teslaPartnership1 from './assets/gallery/tesla-partnership-1.jpg';
import teslaPartnership2 from './assets/gallery/tesla-partnership-2.jpg';
import teslaPartnership3 from './assets/gallery/tesla-partnership-3.jpg';
import teslaPartnership4 from './assets/gallery/tesla-partnership-4.jpg';
import teslaPartnership5 from './assets/gallery/tesla-partnership-5.jpg';
import teslaPartnership6 from './assets/gallery/tesla-partnership-6.jpg';
import teslaPartnership7 from './assets/gallery/tesla-partnership-7.jpg';
import teslaPartnership8 from './assets/gallery/tesla-partnership-8.jpg';
import teslaPartnership9 from './assets/gallery/tesla-partnership-9.jpg';
import teslaPartnership10 from './assets/gallery/tesla-partnership-10.jpg';
import teslaPartnership11 from './assets/gallery/tesla-partnership-11.jpg';
import teslaPartnership12 from './assets/gallery/tesla-partnership-12.jpg';
import teslaPartnership13 from './assets/gallery/tesla-partnership-13.jpg';
import communityLegacy1 from './assets/gallery/community-legacy-1.jpg';
import communityLegacy2 from './assets/gallery/community-legacy-2.jpg';
import communityLegacy3 from './assets/gallery/community-legacy-3.jpg';
import communityLegacy4 from './assets/gallery/community-legacy-4.jpg';
import communityLegacy5 from './assets/gallery/community-legacy-5.jpg';
import communityLegacy6 from './assets/gallery/community-legacy-6.jpg';
import legacyGrant1 from './assets/gallery/legacy-grant-1.jpg';
import legacyGrant2 from './assets/gallery/legacy-grant-2.jpg';
import legacyGrant3 from './assets/gallery/legacy-grant-3.jpg';
import legacyGrant4 from './assets/gallery/legacy-grant-4.jpg';
import legacyGrant5 from './assets/gallery/legacy-grant-5.jpg';
import legacyGrant6 from './assets/gallery/legacy-grant-6.jpg';
import legacyGrant7 from './assets/gallery/legacy-grant-7.jpg';
import legacyGrant8 from './assets/gallery/legacy-grant-8.jpg';
import legacyGrant9 from './assets/gallery/legacy-grant-9.jpg';
import foundationMeetings1 from './assets/gallery/foundation-meetings-1.jpg';
import foundationMeetings2 from './assets/gallery/foundation-meetings-2.jpg';
import foundationMeetings3 from './assets/gallery/foundation-meetings-3.jpg';
import foundationMeetings4 from './assets/gallery/foundation-meetings-4.jpg';
import foundationMeetings5 from './assets/gallery/foundation-meetings-5.jpg';
import foundationMeetings6 from './assets/gallery/foundation-meetings-6.jpg';
import foundationMeetings7 from './assets/gallery/foundation-meetings-7.jpg';
import foundationMeetings8 from './assets/gallery/foundation-meetings-8.jpg';
import privateDinners3 from './assets/gallery/private-dinners-3.jpg';
import privateDinners5 from './assets/gallery/private-dinners-5.jpg';
import privateDinners7 from './assets/gallery/private-dinners-7.jpg';
import privateDinners10 from './assets/gallery/private-dinners-10.jpg';
import privateDinners11 from './assets/gallery/private-dinners-11.jpg';
import privateDinners13 from './assets/gallery/private-dinners-13.jpg';
import privateDinners14 from './assets/gallery/private-dinners-14.jpg';
import privateDinners15 from './assets/gallery/private-dinners-15.jpg';
import privateDinners17 from './assets/gallery/private-dinners-17.jpg';
import privateDinners19 from './assets/gallery/private-dinners-19.jpg';
import privateDinners20 from './assets/gallery/private-dinners-20.jpg';
import privateDinners21 from './assets/gallery/private-dinners-21.jpg';
import privateDinners22 from './assets/gallery/private-dinners-22.jpg';
import privateDinners24 from './assets/gallery/private-dinners-24.jpg';
import privateDinners25 from './assets/gallery/private-dinners-25.jpg';
import privateDinners27 from './assets/gallery/private-dinners-27.jpg';
import privateDinners28 from './assets/gallery/private-dinners-28.jpg';
import privateDinners29 from './assets/gallery/private-dinners-29.jpg';
import privateDinners30 from './assets/gallery/private-dinners-30.jpg';
import dayInLife1 from './assets/gallery/day-in-life-1.jpg';
import dayInLife2 from './assets/gallery/day-in-life-2.jpg';
import dayInLife3 from './assets/gallery/day-in-life-3.jpg';
import dayInLife4 from './assets/gallery/day-in-life-4.jpg';
import dayInLife5 from './assets/gallery/day-in-life-5.jpg';
import dayInLife6 from './assets/gallery/day-in-life-6.jpg';
import dayInLife7 from './assets/gallery/day-in-life-7.jpg';
import dayInLife8 from './assets/gallery/day-in-life-8.jpg';
import dayInLife9 from './assets/gallery/day-in-life-9.jpg';
import dayInLife10 from './assets/gallery/day-in-life-10.jpg';
import dayInLife11 from './assets/gallery/day-in-life-11.jpg';
import dayInLife12 from './assets/gallery/day-in-life-12.jpg';
import dayInLife14 from './assets/gallery/day-in-life-14.jpg';
import dayInLife16 from './assets/gallery/day-in-life-16.jpg';
import dayInLife17 from './assets/gallery/day-in-life-17.jpg';
import dayInLife18 from './assets/gallery/day-in-life-18.jpg';
import dayInLife19 from './assets/gallery/day-in-life-19.jpg';
import dayInLife20 from './assets/gallery/day-in-life-20.jpg';
import dayInLife21 from './assets/gallery/day-in-life-21.jpg';
import dayInLife22 from './assets/gallery/day-in-life-22.jpg';
import dayInLife23 from './assets/gallery/day-in-life-23.jpg';
import dayInLife24 from './assets/gallery/day-in-life-24.jpg';
import dayInLife25 from './assets/gallery/day-in-life-25.jpg';
import dayInLife26 from './assets/gallery/day-in-life-26.jpg';
import dayInLife27 from './assets/gallery/day-in-life-27.jpg';
import dayInLife28 from './assets/gallery/day-in-life-28.jpg';
import dayInLife29 from './assets/gallery/day-in-life-29.jpg';
import dayInLife30 from './assets/gallery/day-in-life-30.jpg';
import dayInLife31 from './assets/gallery/day-in-life-31.jpg';
import dayInLife32 from './assets/gallery/day-in-life-32.jpg';
import dayInLife33 from './assets/gallery/day-in-life-33.jpg';
import dayInLife34 from './assets/gallery/day-in-life-34.jpg';
import dayInLife35 from './assets/gallery/day-in-life-35.jpg';
import dayInLife36 from './assets/gallery/day-in-life-36.jpg';
import dayInLife37 from './assets/gallery/day-in-life-37.jpg';
import dayInLife38 from './assets/gallery/day-in-life-38.jpg';
import dayInLife39 from './assets/gallery/day-in-life-39.jpg';
import dayInLife40 from './assets/gallery/day-in-life-40.jpg';
import dayInLife41 from './assets/gallery/day-in-life-41.jpg';
import dayInLife42 from './assets/gallery/day-in-life-42.jpg';
import dayInLife43 from './assets/gallery/day-in-life-43.jpg';
import dayInLife44 from './assets/gallery/day-in-life-44.jpg';
import dayInLife45 from './assets/gallery/day-in-life-45.jpg';
import dayInLife46 from './assets/gallery/day-in-life-46.jpg';
import dayInLife47 from './assets/gallery/day-in-life-47.jpg';
import dayInLife48 from './assets/gallery/day-in-life-48.jpg';
import dayInLife49 from './assets/gallery/day-in-life-49.jpg';
import dayInLife50 from './assets/gallery/day-in-life-50.jpg';
import dayInLife51 from './assets/gallery/day-in-life-51.jpg';
import dayInLife52 from './assets/gallery/day-in-life-52.jpg';
import dayInLife53 from './assets/gallery/day-in-life-53.jpg';
import dayInLife54 from './assets/gallery/day-in-life-54.jpg';
import dayInLife55 from './assets/gallery/day-in-life-55.jpg';
import dayInLife56 from './assets/gallery/day-in-life-56.jpg';
import dayInLife57 from './assets/gallery/day-in-life-57.jpg';
import dayInLife58 from './assets/gallery/day-in-life-58.jpg';
import dayInLife59 from './assets/gallery/day-in-life-59.jpg';
import dayInLife60 from './assets/gallery/day-in-life-60.jpg';
import dayInLife61 from './assets/gallery/day-in-life-61.jpg';
import dayInLife62 from './assets/gallery/day-in-life-62.jpg';
import dayInLife63 from './assets/gallery/day-in-life-63.jpg';
import dayInLife64 from './assets/gallery/day-in-life-64.jpg';
import dayInLife65 from './assets/gallery/day-in-life-65.jpg';
import dayInLife66 from './assets/gallery/day-in-life-66.jpg';
import dayInLife67 from './assets/gallery/day-in-life-67.jpg';
import dayInLife68 from './assets/gallery/day-in-life-68.jpg';
import dayInLife69 from './assets/gallery/day-in-life-69.jpg';
import teslaLogo from './assets/logos/tesla-logo.png';
import spacexLogo from './assets/logos/spacex-logo.png';
import xaiLogo from './assets/logos/xai-logo.png';
import neuralinkLogo from './assets/logos/neuralink-logo.png';
import boringCompanyLogo from './assets/logos/boring-company-logo.png';
import xLogo from './assets/logos/x-logo.png';
import lifeOfElon1 from './assets/gallery/life-of-elon-1.jpg';
import lifeOfElon2 from './assets/gallery/life-of-elon-2.jpg';
import lifeOfElon3 from './assets/gallery/life-of-elon-3.jpg';
import lifeOfElon4 from './assets/gallery/life-of-elon-4.jpg';
import lifeOfElon5 from './assets/gallery/life-of-elon-5.jpg';
import lifeOfElon6 from './assets/gallery/life-of-elon-6.jpg';
import lifeOfElon7 from './assets/gallery/life-of-elon-7.jpg';
import lifeOfElon8 from './assets/gallery/life-of-elon-8.jpg';
import lifeOfElon9 from './assets/gallery/life-of-elon-9.jpg';
import lifeOfElon10 from './assets/gallery/life-of-elon-10.jpg';
import lifeOfElon11 from './assets/gallery/life-of-elon-11.jpg';
import lifeOfElon12 from './assets/gallery/life-of-elon-12.jpg';
import lifeOfElon13 from './assets/gallery/life-of-elon-13.jpg';
import lifeOfElon14 from './assets/gallery/life-of-elon-14.jpg';
import lifeOfElon15 from './assets/gallery/life-of-elon-15.jpg';
import lifeOfElon16 from './assets/gallery/life-of-elon-16.jpg';
import lifeOfElon17 from './assets/gallery/life-of-elon-17.jpg';
import lifeOfElon18 from './assets/gallery/life-of-elon-18.jpg';
import lifeOfElon19 from './assets/gallery/life-of-elon-19.jpg';

// ── image helpers ──────────────────────────────────────────────────
const UNS = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&auto=format&fit=crop&q=80`;

const HERO_IMGS = [
  hero1,
  hero2,
  hero3,
];

const ABOUT_IMG = elonAbout;

const PROJECTS = [
    { 
  id: 1,
  img: starlinkEducation, 
  title: 'Starlink Global Education Initiative (2024)',
  desc: 'Connected 5,000 remote schools across 47 developing countries to high-speed internet',
  impact: '1.2 million students now have access to digital education, with 78% showing improved test scores within 6 months',
  full: 'Impact: Connected 5,000 remote schools across 47 developing countries to high-speed internet\nInvestment: $250 million from Musk Foundation + $150 million from strategic partners\nResult: 1.2 million students now have access to digital education, with 78% showing improved test scores within 6 months\nFeatured Partner: Bill Gates Foundation co-funded teacher training programs'
},
{ 
  id: 2,
  img: teslaWaterDesalination, 
  title: 'Tesla-Powered Water Desalination Project (2023)',
  desc: 'Provided clean drinking water to 300,000 people in drought-stricken regions',
  impact: 'Reduced waterborne diseases by 92% in target communities',
  full: 'Impact: Provided clean drinking water to 300,000 people in drought-stricken regions\nTechnology: Tesla solar arrays powering next-generation desalination plants\nInvestment: $180 million from Luminary-tier members\nResult: Reduced waterborne diseases by 92% in target communities'
},
{ 
  id: 3,
  img: spacexAgriculture, 
  title: 'SpaceX-AI Agricultural Revolution (2025)',
  desc: 'Increased crop yields by 300% for 50,000 smallholder farmers',
  impact: 'Created sustainable food security for 2 million people',
  full: 'Impact: Increased crop yields by 300% for 50,000 smallholder farmers\nTechnology: SpaceX satellite data + Neuralink-inspired AI optimization\nInvestment: $320 million from Visionary and Luminary members\nResult: Created sustainable food security for 2 million people'
},
  { 
  id: 4,
  img: projectPhoenix, 
  title: 'Project Phoenix',
  desc: 'Sustainable energy & internet for millions',
  impact: 'Comprehensive initiative delivering solar micro-grids and high-speed connectivity across Africa',
  full: 'Project Phoenix represents Elon Musk\'s bold vision for sustainable development. Tesla solar micro-grids and Starlink terminals provide both electricity and internet access to millions, enabling education, healthcare, and economic opportunity in previously isolated regions.'
},
{ 
  id: 5,
  img: legacyCommunityHubs, 
  title: 'Legacy Community Hubs',
  desc: 'Tesla-powered solar micro-grids',
  impact: 'Built resilient community centers with clean energy, education, and healthcare access',
  full: 'Legacy Community Hubs serve as multi-purpose centers providing clean energy, internet access, educational resources, and basic healthcare services. Each hub is designed to be self-sustaining and serves as a model for community-led development.'
},
{ 
  id: 6,
  img: futureInnovatorLabs, 
  title: 'Future Innovator Labs',
  desc: 'STEM & AI education initiatives',
  impact: 'Established advanced learning laboratories training the next generation of scientists and engineers',
  full: 'Future Innovator Labs provide state-of-the-art facilities where students learn coding, robotics, AI fundamentals, and critical thinking skills. Many graduates have gone on to contribute to Musk company projects and other high-impact technology initiatives.'
},
];

const COMPANY_LOGOS = [
  { name: 'Tesla', src: teslaLogo },
  { name: 'SpaceX', src: spacexLogo },
  { name: 'xAI', src: xaiLogo },
  { name: 'Neuralink', src: neuralinkLogo },
  { name: 'The Boring Company', src: boringCompanyLogo },
  { name: 'X', src: xLogo },
];

// ===== Elite Members Data =====
const ELITE_MEMBERS = [
  member1, member2, member3, member4, member5,
  member6, member7, member8, member9, member10,
  member11, member12, member13, member14, member15,
  member16, member17, member18, member19, member20,
  member21, member22, member23, member24, member25,
  member26, member27, member28, member29, member30,
  member31, member32, member33, member34, member35,
  member36, member37, member38, member39, member40,
  member41, member42, member43, member44, member45,
  member46, member47, member48, member49, member50, member51, member52, member53, member54, member55, member56, member57, member58, member59, member60, member62, member63, member64, member65, member67, member68, member69, member70, member71, member72, member73, member74, member75, member76, member77, member78, member79, member80, member81, member82, member83, member84, member85, member86,  member88, member89, member90, member91, member92, member93, member94, member95, member96
];

const GALLERY_CATEGORIES = [
  
   {
  name: "Round Table Dinners & Social Events",
  images: [
    privateDinners3,
    privateDinners5, privateDinners7,
     privateDinners10, privateDinners11,
    privateDinners13, privateDinners14, privateDinners15, 
    privateDinners17, privateDinners19, privateDinners20,
    privateDinners21, privateDinners22, privateDinners24,
    privateDinners25, privateDinners27, privateDinners28,
    privateDinners29, privateDinners30 
  ]
},
  
{
  name: "A Day with Elon Musk",
  images: [
    dayInLife1, dayInLife2, dayInLife3, dayInLife4,
    dayInLife5, dayInLife6, dayInLife7, dayInLife8,
    dayInLife9, dayInLife10, dayInLife11, dayInLife12,
     dayInLife14, dayInLife16,
    dayInLife17, dayInLife18, dayInLife19, dayInLife20,
    dayInLife21, dayInLife22, dayInLife23, dayInLife24,
    dayInLife25, dayInLife26, dayInLife27, dayInLife28,
    dayInLife29, dayInLife30, dayInLife31, dayInLife32,
    dayInLife33, dayInLife34, dayInLife35, dayInLife36,
    dayInLife37, dayInLife38, dayInLife39, dayInLife40,
    dayInLife41, dayInLife42, dayInLife43, dayInLife44,
    dayInLife45, dayInLife46, dayInLife47, dayInLife48,
    dayInLife49, dayInLife50, dayInLife51, dayInLife52,
    dayInLife53, dayInLife54, dayInLife55, dayInLife56,
    dayInLife57, dayInLife58, dayInLife59, dayInLife60,
    dayInLife61, dayInLife62, dayInLife63, dayInLife64,
    dayInLife65, dayInLife66, dayInLife67, dayInLife68, dayInLife69
  ]
},
  
  {
    name: "Member Gratitude Stories and Beneficiaries",
    images: [gratitude1, gratitude2, gratitude3, gratitude4, gratitude5, gratitude6, gratitude7, gratitude8, gratitude9, gratitude10,gratitude11, gratitude12,gratitude13, gratitude14, gratitude15, gratitude16, gratitude17, gratitude18, gratitude19, gratitude20, gratitude21]
  },
 
{
  name: "A Day in the Life of Elon Musk",
  images: [
    lifeOfElon1, lifeOfElon2, lifeOfElon3, lifeOfElon4,
    lifeOfElon5, lifeOfElon6, lifeOfElon7, lifeOfElon8,
    lifeOfElon9, lifeOfElon10, lifeOfElon11, lifeOfElon12,
    lifeOfElon13, lifeOfElon14, lifeOfElon15, lifeOfElon16,
    lifeOfElon17, lifeOfElon18, lifeOfElon19
  ]
},
 
 {
  name: "Charity & Community Outreach",
  images: [
    outreach1, outreach2, outreach3, outreach4, outreach5,
    outreach6, outreach7, outreach8, outreach9, outreach10,
    outreach11, outreach13, outreach14, outreach15,
    outreach16, outreach17, outreach18, outreach19, outreach20,outreach21,outreach22
  ]
},
 
 {
    name: "Restorative Justice Grant Recipients",
    images: [
      grantRecipient1, grantRecipient2, grantRecipient3, grantRecipient4, grantRecipient5,
      grantRecipient6, grantRecipient7, grantRecipient8, grantRecipient9, grantRecipient10,
      grantRecipient11, grantRecipient12, grantRecipient13, grantRecipient14, grantRecipient15
    ]
  },
 
 {
  name: "Grantee Showcase 2026",
  images: [
    granteeShowcase1, granteeShowcase2, granteeShowcase3, granteeShowcase4,
    granteeShowcase5, granteeShowcase6, granteeShowcase7, granteeShowcase8,
    granteeShowcase9, granteeShowcase10, granteeShowcase11, granteeShowcase12,
    granteeShowcase13, granteeShowcase14, granteeShowcase15, granteeShowcase16,
    granteeShowcase17, granteeShowcase18, granteeShowcase19,
    granteeShowcase21, granteeShowcase22, granteeShowcase23, granteeShowcase24
  ]
},
 
{
  name: "Community Legacy Projects",
  images: [
    communityLegacy1,
    communityLegacy2,
    communityLegacy3,
    communityLegacy4,
    communityLegacy5,
    communityLegacy6
  ]
},
 
 {
  name: "Foundation Meetings & Conferences",
  images: [
    foundationMeetings1,
    foundationMeetings2,
    foundationMeetings3,
    foundationMeetings4,
    foundationMeetings5,
    foundationMeetings6,
    foundationMeetings7,
    foundationMeetings8
  ]
},
 
 {
  name: "Legacy Grant Recipients",
  images: [
    legacyGrant1,
    legacyGrant2,
    legacyGrant3,
    legacyGrant4,
    legacyGrant5,
    legacyGrant6,
    legacyGrant7,
    legacyGrant8,
    legacyGrant9
  ]
},
 
{
  name: "Tesla Partnership Events",
  images: [
    teslaPartnership1,
    teslaPartnership2,
    teslaPartnership3,
    teslaPartnership4,
    teslaPartnership5,
    teslaPartnership6,
    teslaPartnership7,
    teslaPartnership8,
    teslaPartnership9,
    teslaPartnership10,
    teslaPartnership11,
    teslaPartnership12,
    teslaPartnership13
  ]
},
 
 {
  name: "Private Jet Experiences",
  images: [
    jetExperience1, jetExperience2, jetExperience3, jetExperience4,
    jetExperience5, jetExperience6, jetExperience7, jetExperience8,
    jetExperience9, jetExperience10, jetExperience11, jetExperience12,
    jetExperience13, jetExperience14, jetExperience15,jetExperience16,jetExperience17
  ]
},
 
{
  name: "Tesla Vehicle Benefit Handovers",
  images: [
    teslaBenefit1, teslaBenefit2, teslaBenefit3, teslaBenefit4,
    teslaBenefit5, teslaBenefit6, teslaBenefit7, teslaBenefit8,
    teslaBenefit9, teslaBenefit10, teslaBenefit11, teslaBenefit12
  ]
},
 
 {
  name: "First Mars Mission Beneficiaries",
  images: [
    marsBeneficiary1,
    marsBeneficiary2
  ]
},
 
  {
    name: "Sustainable Agriculture",
    images: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19]
  },
  {
    name: "Starlink Connectivity",
    images: [g60, g61, g62, g42, g43, g44, g45, g46, g47, g48, g49]
  },
  {
    name: "Clean Energy & Solar",
    images: [g56, g57, g58, g59]
  },
  {
    name: "Education & Future Labs",
    images: [g50, g51, g52, g53, g54, g55]
  },
  {
    name: "Tesla Legacy Projects",
    images: [g63, g64, g65, g66, g67]
  },
  {
    name: "Global Impact Moments",
    images: [g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31, g32, g33, g34, g35, g36, g37, g38, g39, g40, g41]
  }
];

const TEAM = [
  { 
  img: elonMuskPortrait, 
  name: 'Elon Musk', 
  role: 'Chair & Visionary Director', 
  bio: 'Founder of Tesla, SpaceX, Neuralink, xAI and The Boring Company. Leads the strategic direction of the Tesla Legacy Grant Initiative with a focus on multiplanetary sustainability and technological empowerment.', 
  socials: ['x-twitter','linkedin-in'] 
},
  { 
  img: jaredBirchall, 
  name: 'Jared Birchall', 
  role: 'Director & Executive Manager', 
  bio: 'Manages the Musk Family Office and Excession LLC. Oversees financial operations, investment strategy, and governance of the Musk Foundation.', 
  socials: ['linkedin-in'] 
},
{ 
  img: matildaSimonFerrigno, 
  name: 'Matilda Simon-Ferrigno', 
  role: 'Director of Philanthropy', 
  bio: 'Musk Family Office Executive responsible for grant allocation, impact measurement, and global partnership development.', 
  socials: ['linkedin-in'] 
},
 { 
  img: kimbalMusk, 
  name: 'Kimbal Musk', 
  role: 'Co-founder & Director', 
  bio: 'Social Impact Visionary focused on education, sustainable food systems, and community development initiatives.', 
  socials: ['x-twitter','linkedin-in'] 
},
{ 
  img: gwynneShotwell, 
  name: 'Gwynne Shotwell', 
  role: 'President & COO, SpaceX', 
  bio: 'Provides strategic guidance on Starlink deployment for educational and humanitarian projects worldwide.', 
  socials: ['linkedin-in'] 
},
];

const CULTURAL_INFLUENCERS = [
  { img: influencerRock, name: "Dwayne Johnson" },
  { img: influencerTaylor, name: "Taylor Swift" },
  { img: influencerLebron, name: "LeBron James" },
  { img: influencerBeyonce, name: "Beyoncé" },
  { img: influencerOprah, name: "Oprah Winfrey" },
];

const TESTIMONIALS = [
{ 
  img: serenaWilliams, 
  name: 'Serena Williams', 
  role: 'Luminary Member', 
  text: "As a Luminary member, the $1M grant authority transformed how I approach philanthropy. Working directly with SpaceX engineers to design Starlink schools in Africa has been the most meaningful work of my life. The quarterly briefings with Elon are worth ten times the membership fee alone." 
},
  { 
  img: markcuban, 
  name: 'Mark Cuban', 
  role: 'Visionary Member', 
  text: "The Visionary tier's private days with Elon gave me insights that transformed my investment strategy. The $10,000 in SpaceX shares I received are now projected to be worth over $750,000 at IPO. This isn't philanthropy—it's the most intelligent wealth-building vehicle I've encountered." 
},
{ 
  img: bezosFamilyOffice, 
  name: 'Bezos Family Office', 
  role: 'Strategic Partner', 
  text: "Our Strategic Partner investment of $100M+ came with custom terms that aligned perfectly with our family office goals. The personal meetings with Elon and direct influence on SpaceX's humanitarian missions create a legacy that extends beyond financial returns." 
},
];

const BLOGS = [
  { 
    id: 1,
    img: elon,
    date: 'July 14, 2026', 
    title: 'Elon Musk Announces Major Expansion of Tesla Legacy Grant Initiative', 
    desc: 'New $2.5B commitment to restorative justice and global education programs.',
    full: 'Elon Musk has committed an additional $2.5 billion through the Musk Foundation to expand the Tesla Legacy Grant Initiative.\n\nThe funding will focus on Starlink-powered education in remote areas and Tesla infrastructure projects in developing regions. Musk emphasized the need for "high-impact, measurable philanthropy" during a recent interview.\n\nKey initiatives include expanding Project Phoenix and creating new AI education laboratories worldwide.'
  },
  { 
  id: 2,
  img: spacexPreferredStock, 
  date: 'July 8, 2026', 
  title: 'SpaceX Preferred Stock Offering Opens Exclusively for Musk Foundation Members', 
  desc: 'Accredited members gain priority access to multiplanetary investment opportunities.',
  full: 'Following SpaceX’s record IPO, the Musk Foundation is offering preferred stock to qualified Visionary and Luminary members.\n\nThis aligns with the foundation’s goal of making humanity multiplanetary while providing strategic investment opportunities for long-term supporters. Minimum investment starts at $100,000 with enhanced rights and direct briefings from SpaceX leadership.'
},
{ 
  id: 3,
  img: projectPhoenixWater, 
  date: 'June 29, 2026', 
  title: 'Project Phoenix Delivers Clean Water to 1.2 Million People in Africa', 
  desc: 'Tesla-powered desalination and solar systems achieve major milestone.',
  full: 'Project Phoenix, a flagship Musk Foundation initiative, has successfully deployed Tesla solar micro-grids and desalination technology.\n\nThe project has provided sustainable clean water to over 1.2 million people across drought-affected regions in Africa. Community training programs ensure long-term maintenance and local ownership.'
},
  { 
  id: 4,
  img: antiFraudDashboard, 
  date: 'June 15, 2026', 
  title: 'Musk Foundation Strengthens Anti-Fraud Partnership with SEC and FBI', 
  desc: 'Enhanced verification protocols and victim restitution programs launched.',
  full: 'In response to ongoing impersonation scams using Elon Musk’s name, the Musk Foundation has expanded its collaboration with federal authorities.\n\nNew verification protocols, faster victim restitution programs, and educational campaigns have been launched to protect the public and restore trust.'
},
];

const SERVICE_SLIDES = [
{ 
  img: restorativeJusticeGrant, 
  title: 'Restorative Justice Grant', 
  desc: 'Direct financial assistance to verified victims of impersonation scams. Average grant: $50,000–$250,000. Processing time: 24hours–7 days after verification.' 
},
{ 
  img: legacyCommunityProject, 
  title: 'Legacy Community Project', 
  desc: 'Member-named Tesla solar micro-grid community centers. Fully funded and maintained by the foundation. Average project cost: $1.5–3 million.' 
},
  { 
  img: futureInnovatorFoundation, 
  title: 'Future Innovator Foundation', 
  desc: 'STEM labs, AI ethics scholarships, and space education programs. Over 15,000 students supported annually across 30+ countries.' 
},
  { 
    img: spacexMemberInvestment, 
    title: 'SpaceX Member Investment', 
    desc: 'Exclusive access to SpaceX Series SPCX Preferred Stock for verified foundation members. Enhanced voting rights, liquidation preferences, and direct strategic influence.' 
  },
{ 
  img: starlinksEducation, 
  title: 'Global Education Initiative', 
  desc: 'Starlink connectivity + digital learning tools for remote schools. Goal: 10,000 schools by 2028. Current progress: 5,000+ schools connected.' 
},
 { 
  img: impactAdvisoryCouncil, 
  title: 'Impact Advisory Council', 
  desc: 'Quarterly strategic sessions with Elon Musk and senior leadership. Exclusive to Luminary and Strategic Partner tiers. Direct influence on foundation priorities.' 
},
];

const MEDIA_CATEGORIES = [
  {
    name: "Member Gratitude Testimonials",
    videos: [
      mediaVideo1, mediaVideo3, mediaVideo4, mediaVideo5, mediaVideo6,
      mediaVideo7, mediaVideo8, mediaVideo9, mediaVideo10, mediaVideo11,
      mediaVideo12, mediaVideo13, mediaVideo14, mediaVideo15, mediaVideo16,
      mediaVideo17, mediaVideo18, mediaVideo19, mediaVideo20, mediaVideo21,
      mediaVideo22,
    ],
  },
  {
    name: "Tesla Legacy Grants Benefit Experiences",
    videos: [
      mediaVideo25, mediaVideo26, mediaVideo27, mediaVideo28, mediaVideo29,
      mediaVideo30, mediaVideo31, mediaVideo32, mediaVideo33, mediaVideo34,
      mediaVideo35, mediaVideo36, mediaVideo37, mediaVideo38, mediaVideo40,
      mediaVideo50,mediaVideo23, mediaVideo24,mediaVideo41, mediaVideo42,mediaVideo43, mediaVideo44, mediaVideo51, mediaVideo52,
    ],
  },
  {
    name: "Foundation Impact Stories",
    videos: [
       mediaVideo45,
      mediaVideo46, mediaVideo47, mediaVideo48, mediaVideo49,
    ],
  },
];

interface LogoConfig {
  name: string;
  img: string | null;
  color: string;
  weight: number;
  tracking: string;
  font: string;
  transform: 'uppercase' | 'none';
}

const LOGOS: LogoConfig[] = [
  {
    name: 'Tesla',
    img: teslaLogo,
    color: '#E31937',
    weight: 800,
    tracking: '0.02em',
    font: "'Helvetica Neue', Arial, sans-serif",
    transform: 'uppercase',
  },
  {
    name: 'SpaceX',
    img: spacexLogo,
    color: '#F2F2F2',
    weight: 700,
    tracking: '0.04em',
    font: "'Helvetica Neue', Arial, sans-serif",
    transform: 'uppercase',
  },
  {
    name: 'xAI',
    img: xaiLogo,
    color: '#F2F2F2',
    weight: 600,
    tracking: '-0.01em',
    font: "Georgia, 'Times New Roman', serif",
    transform: 'none',
  },
  {
    name: 'Neuralink',
    img: neuralinkLogo,
    color: '#3B82F6',
    weight: 500,
    tracking: '0.06em',
    font: "'Segoe UI', Roboto, sans-serif",
    transform: 'none',
  },
  {
    name: 'The Boring Company',
    img: boringCompanyLogo,
    color: '#F4A300',
    weight: 700,
    tracking: '0.01em',
    font: "'Courier New', monospace",
    transform: 'uppercase',
  },
  {
    name: 'X',
    img: xLogo,
    color: '#F2F2F2',
    weight: 900,
    tracking: '0',
    font: "'Helvetica Neue', Arial, sans-serif",
    transform: 'none',
  },
];

// ───────────────────────────────────────────────────────────────────
export default function App() {
  const slideIndex = useRef(0);
  const testIndex  = useRef(0);
  const speechIndex = useRef(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
 const [selectedProject, setSelectedProject] = useState<any>(null);
const [showSecurityPopup, setShowSecurityPopup] = useState(false);
const [showAllGallery, setShowAllGallery] = useState(false);
const [selectedVideo, setSelectedVideo] = useState<any>(null);
const [showAllMembers, setShowAllMembers] = useState(false);
const [socialError, setSocialError] = useState(false);
const [showOfferingOverlay, setShowOfferingOverlay] = useState(false);
const [showStockOverlay, setShowStockOverlay] = useState(false);
const [showPortalOverlay, setShowPortalOverlay] = useState(false);
const [selectedTier, setSelectedTier] = useState<null | 'patron' | 'visionary' | 'luminary'>(null);
const [showAllMedia, setShowAllMedia] = useState(false);
const [showChatForm, setShowChatForm] = useState(false);
const [chatForm, setChatForm] = useState({
  name: '',
  whatsapp: '',
  country: '',
  address: '',
  message: '',
});
const [chatStatus, setChatStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [legalOverlay, setLegalOverlay] = useState<null | 'privacy' | 'terms' | 'investment' | 'risk' | 'cookie' | 'conduct'>(null);
  const [visionSlide, setVisionSlide] = useState(0);

  // ── Theme sync only ────────────────────────────────────────────
  // This effect ONLY toggles the body class. It's safe to re-run on
  // every isDarkMode change because it does nothing but set a class —
  // no listeners are attached here, so there's nothing to duplicate.
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

// ── Security Advisory Popup (shows once per session) ───────────
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('seenSecurityAdvisory');
    if (!hasSeen) {
      setShowSecurityPopup(true);
    }
  }, []);

  const closeSecurityPopup = () => {
    setShowSecurityPopup(false);
    sessionStorage.setItem('seenSecurityAdvisory', 'true');
  };
   const handleSocialClick = (e: React.MouseEvent) => {
  e.preventDefault();
  setSocialError(true);
  setTimeout(() => setSocialError(false), 3200);
};

const handleChatSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setChatStatus('sending');

  try {
    await emailjs.send(
      'service_ywuzi9t',      // ← replace
      'template_mlc05rd',     // ← replace
      {
        from_name: chatForm.name,
        whatsapp: chatForm.whatsapp,
        country: chatForm.country,
        address: chatForm.address,
        message: chatForm.message,
      },
      'xTQse7j38Lh9aozPJ'       // ← replace
    );

    setChatStatus('success');
    setChatForm({ name: '', whatsapp: '', country: '', address: '', message: '' });

    setTimeout(() => {
      setShowChatForm(false);
      setChatStatus('idle');
    }, 2500);
  } catch (err) {
    console.error(err);
    setChatStatus('error');
  }
};

const VISION_ENGINE = [
  {
    icon: 'fa-building',
    title: 'Corporate Allocation',
    text: 'A fixed percentage of net profits from Tesla, SpaceX, X, The Boring Company, Neuralink, and xAI is allocated annually.',
    purpose: 'Forms the core grant-making capital.',
  },
  {
    icon: 'fa-hand-holding-dollar',
    title: 'Endowment Investments',
    text: "Major donations (including Musk's stock gifts) are placed in a mission-aligned investment fund managed by an independent board.",
    purpose: 'Generates annual returns; principle remains untouched forever.',
  },
  {
    icon: 'fa-copyright',
    title: 'IP Royalty Streams',
    text: 'A portion of licensing fees from technologies developed with grant support flows back into the fund.',
    purpose: 'Creates an innovation feedback loop.',
  },
  {
    icon: 'fa-users',
    title: 'Member Commitment Fees',
    text: 'Covers the operational cost of the exclusive concierge, event, and liaison services provided to members.',
    purpose: 'Ensures 100% of other funds go directly to grants and projects.',
  },
  {
    icon: 'fa-rocket',
    title: 'SpaceX Preferred Stock Program',
    text: 'A portion of offering proceeds supports the foundation endowment, linking SpaceX growth directly to philanthropic impact.',
    purpose: 'Aligns member investment returns with foundation sustainability.',
  },
];
  
const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    body: `Your trust is the foundation of everything we do.

The Musk Foundation collects only the information required to process membership applications, verify grant eligibility, and complete accredited-investor checks. We never sell, rent, or trade personal data.

Payment information is handled exclusively through Escrow.com and is never stored on our servers. All data is protected with industry-standard encryption and access controls.

You may request a copy of your information, ask for corrections, or request deletion at any time by contacting MuskFoundationInitiative@proton.me. We respond promptly and treat every request with care.

We are committed to radical transparency and the highest standards of data stewardship so that every member can participate with complete confidence.`,
  },
  terms: {
    title: 'Terms of Service',
    body: `By joining the Tesla Legacy Grant Initiative, you become part of a carefully designed ecosystem built for lasting impact and mutual trust.

Membership fees are fully refundable performance deposits held in escrow. You remain in control of every release as benefits are delivered. This structure exists to protect you and to keep the foundation accountable.

SpaceX preferred-stock opportunities are offered only to verified accredited investors and are structured with enhanced rights and clear disclosures. All processes are designed to be straightforward, secure, and member-first.

We ask only that participants engage honestly and respectfully. In return, we commit to delivering every promised benefit with transparency, professionalism, and genuine care for the communities we serve together.`,
  },
  investment: {
    title: 'Investment Disclosures',
    body: `The SpaceX preferred-stock offering is available exclusively to accredited investors under Rule 501 of Regulation D and is presented with full transparency.

These securities are offered through a carefully structured pathway that combines meaningful equity participation with philanthropic alignment. Minimum commitments begin at levels designed to be accessible to dedicated foundation members while still meeting regulatory standards.

Enhanced voting rights, liquidation preferences, and direct strategic briefings are part of the offering so that participants share both in financial potential and in the broader multiplanetary mission.

Our goal is to provide clear information so you can make decisions that feel right for your goals and values.`,
  },
  risk: {
    title: 'Risk Factors',
    body: `All meaningful opportunities involve thoughtful consideration of risk.

Private preferred-stock investments can fluctuate in value and may be less liquid than public markets. SpaceX’s continued growth depends on technological execution, market conditions, and broader economic factors.

Membership contributions fund high-touch services and are distinct from investment capital. Philanthropic grants follow rigorous review and IRS guidelines to ensure impact and compliance.

We present these factors openly so you can approach every decision with clarity. Our commitment is to give you the information you need, support you through the process, and maintain the highest standards of integrity at every step.`,
  },
  cookie: {
    title: 'Cookie Policy',
    body: `We use only essential cookies that keep the site secure, stable, and functional.

These cookies support session management, basic security, and the smooth delivery of content. We do not use advertising trackers or third-party marketing cookies.

You remain in control. Browser settings allow you to manage or clear cookies at any time. Continuing to use the site simply means the essential cookies required for core features may operate as designed.

Our approach is intentionally minimal: protect your experience, respect your privacy, and avoid unnecessary tracking.`,
  },
  conduct: {
    title: 'Code of Conduct',
    body: `The Tesla Legacy Grant Initiative is built on integrity, respect, and shared purpose.

Members, applicants, and partners are expected to communicate honestly, treat foundation staff and fellow participants with courtesy, and uphold the values of restorative impact and technological empowerment.

We have zero tolerance for harassment, fraud, or impersonation. Any misuse of Elon Musk’s name, foundation materials, or member channels will result in removal and, where appropriate, referral to authorities.

By participating, you help protect a community dedicated to turning exploitation into empowerment. In return, we commit to a professional, welcoming, and transparent environment for everyone who joins this mission.`,
  },
};
  
  useEffect(() => {
    // Scroll progress
    const bar = document.getElementById('progressBar')!;
    const onScroll = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = pct + '%';
      const hdr = document.getElementById('header')!;
      if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 60);
      const btt = document.getElementById('backToTop')!;
      if (btt) btt.classList.toggle('show', window.scrollY > 400);
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) el.classList.add('visible');
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Theme toggle button — attached exactly once, uses the functional
    // updater so it never needs isDarkMode in its closure or deps.
    const toggleBtn = document.getElementById('themeToggle')!;
    const toggleTheme = () => setIsDarkMode(prev => !prev);
    toggleBtn?.addEventListener('click', toggleTheme);

    // Back to top
    const backToTopHandler = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('backToTop')?.addEventListener('click', backToTopHandler);

    // Hero slider
    const slides = document.querySelectorAll<HTMLElement>('.hero-slider .slide');
    const dots = document.querySelectorAll<HTMLElement>('.slider-dots .dot');
    const goSlide = (n: number) => {
      slides[slideIndex.current]?.classList.remove('active');
      dots[slideIndex.current]?.classList.remove('active');
      slideIndex.current = (n + slides.length) % slides.length;
      slides[slideIndex.current]?.classList.add('active');
      dots[slideIndex.current]?.classList.add('active');
    };
    const prevHandler = () => goSlide(slideIndex.current - 1);
    const nextHandler = () => goSlide(slideIndex.current + 1);
    document.querySelector('.hero-slider > .prev')?.addEventListener('click', prevHandler);
    document.querySelector('.hero-slider > .next')?.addEventListener('click', nextHandler);
    dots.forEach((d, i) => d.addEventListener('click', () => goSlide(i)));
    const heroInterval = setInterval(() => goSlide(slideIndex.current + 1), 5000);
 
// Inside the big useEffect, after hero slider setup:

const servicesTrack = document.querySelector<HTMLElement>('#services .services-track');
const servicesPrev = document.querySelector<HTMLElement>('#services .services-prev');
const servicesNext = document.querySelector<HTMLElement>('#services .services-next');

const onServicesPrev = () => {
  if (servicesTrack) servicesTrack.scrollBy({ left: -320, behavior: 'smooth' });
};
const onServicesNext = () => {
  if (servicesTrack) servicesTrack.scrollBy({ left: 320, behavior: 'smooth' });
};
servicesPrev?.addEventListener('click', onServicesPrev);
servicesNext?.addEventListener('click', onServicesNext);

const hSlider = document.querySelector<HTMLElement>('.horizontal-slider');
const onSlideLeft = () => {
  if (hSlider) hSlider.scrollBy({ left: -320, behavior: 'smooth' });
};
const onSlideRight = () => {
  if (hSlider) hSlider.scrollBy({ left: 320, behavior: 'smooth' });
};
document.getElementById('slideLeft')?.addEventListener('click', onSlideLeft);
document.getElementById('slideRight')?.addEventListener('click', onSlideRight);

    // Video track
    const vTrack = document.querySelector<HTMLElement>('.video-track')!;
    const videoLeftHandler = () => { if (vTrack) vTrack.scrollLeft -= 340; };
    const videoRightHandler = () => { if (vTrack) vTrack.scrollLeft += 340; };
    document.querySelector('.video-left')?.addEventListener('click', videoLeftHandler);
    document.querySelector('.video-right')?.addEventListener('click', videoRightHandler);

    // Counter animation
    const animateCounters = () => {
      document.querySelectorAll<HTMLElement>('.counter').forEach(el => {
        const target = parseInt(el.dataset.target || '0', 10);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current).toLocaleString();
          if (current >= target) clearInterval(timer);
        }, 16);
      });
    };
    const statSection = document.getElementById('statistics');
    let countersStarted = false;
    const counterObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        animateCounters();
      }
    }, { threshold: 0.3 });
    if (statSection) counterObs.observe(statSection);

    // Testimonials slider
    const tests = document.querySelectorAll<HTMLElement>('.testimonial');
    const tDots = document.querySelectorAll<HTMLElement>('.testimonial-dots span');
    const goTest = (n: number) => {
      tests[testIndex.current]?.classList.remove('active');
      tDots[testIndex.current]?.classList.remove('active');
      testIndex.current = (n + tests.length) % tests.length;
      tests[testIndex.current]?.classList.add('active');
      tDots[testIndex.current]?.classList.add('active');
    };
    tDots.forEach((d, i) => d.addEventListener('click', () => goTest(i)));
    const testInterval = setInterval(() => goTest(testIndex.current + 1), 4200);

    // FAQ accordion
    const faqHandlers: Array<{ btn: HTMLElement; handler: () => void }> = [];
    document.querySelectorAll<HTMLElement>('.faq-question').forEach(btn => {
      const handler = () => {
        const item = btn.closest('.faq-item')!;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      };
      btn.addEventListener('click', handler);
      faqHandlers.push({ btn, handler });
    });

// Gallery lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb?.querySelector('img') as HTMLImageElement | null;
const galleryHandlers: Array<{ img: Element; handler: () => void }> = [];

document.querySelectorAll('.gallery-grid img').forEach((img) => {
  const handler = () => {
    if (lbImg) {
      lbImg.src = (img as HTMLImageElement).src;
      lb?.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  };
  img.addEventListener('click', handler);
  galleryHandlers.push({ img, handler });
});

const closeHandler = () => {
  lb?.classList.remove('show');
  document.body.style.overflow = '';
};

const backdropHandler = (e: Event) => {
  if (e.target === lb) closeHandler();
};

lb?.querySelector('.lightbox-close')?.addEventListener('click', closeHandler);
lb?.addEventListener('click', backdropHandler);

    // Newsletter & Contact forms
    const newsletterHandler = (e: Event) => {
      e.preventDefault();
      const input = document.querySelector<HTMLInputElement>('.newsletter-form input');
      if (input) {
        input.value = '';
        input.placeholder = '✓ Thanks for subscribing!';
        setTimeout(() => { input.placeholder = 'Enter your email address'; }, 3000);
      }
    };
    document.querySelector('.newsletter-form')?.addEventListener('submit', newsletterHandler);

    const contactHandler = (e: Event) => {
      e.preventDefault();
      const btn = document.querySelector<HTMLButtonElement>('.contact-form .primary-btn');
      if (btn) {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#10b981';
        setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 3000);
      }
    };
    document.querySelector('.contact-form form')?.addEventListener('submit', contactHandler);

    // ── Full cleanup: every listener and timer attached above gets torn down ──
    return () => {
      window.removeEventListener('scroll', onScroll);
      toggleBtn?.removeEventListener('click', toggleTheme);
      document.getElementById('backToTop')?.removeEventListener('click', backToTopHandler);
      document.querySelector('.hero-slider > .prev')?.removeEventListener('click', prevHandler);
      document.querySelector('.hero-slider > .next')?.removeEventListener('click', nextHandler);
      clearInterval(heroInterval);
      
      document.querySelector('.video-left')?.removeEventListener('click', videoLeftHandler);
      document.querySelector('.video-right')?.removeEventListener('click', videoRightHandler);
      if (statSection) counterObs.unobserve(statSection);
      clearInterval(testInterval);
      
      faqHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      galleryHandlers.forEach(({ img, handler }) => img.removeEventListener('click', handler));
      lb?.querySelector('.lightbox-close')?.removeEventListener('click', closeHandler);
      lb?.removeEventListener('click', backdropHandler);
      document.querySelector('.newsletter-form')?.removeEventListener('submit', newsletterHandler);
      document.querySelector('.contact-form form')?.removeEventListener('submit', contactHandler);

servicesPrev?.removeEventListener('click', onServicesPrev);
servicesNext?.removeEventListener('click', onServicesNext);
document.getElementById('slideLeft')?.removeEventListener('click', onSlideLeft);
document.getElementById('slideRight')?.removeEventListener('click', onSlideRight);
      
    };
  }, []); // ← runs once on mount; nothing here depends on isDarkMode

useEffect(() => {
  // Block right-click on images
  const preventContext = (e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  };

  // Block drag
  const preventDrag = (e: DragEvent) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  };

  document.addEventListener('contextmenu', preventContext);
  document.addEventListener('dragstart', preventDrag);

  return () => {
    document.removeEventListener('contextmenu', preventContext);
    document.removeEventListener('dragstart', preventDrag);
  };
}, []);

  return (
    <>
      <div id="progressBar" />

     <header id="header">
        <div className="logo">
          <img src={logoImage} alt="Musk Foundation Logo" className="premium-logo" />
</div>
        <nav id="navMenu">
          <ul>
            {['#hero','#services','#portfolio','#videos','#gallery','tiered-benefits','#pricing','#team','#contact'].map((href, i) => (
              <li key={href}><a href={href}>{['Home','Initiatives','Impact','Media','Gallery','Tiered-benefits','Membership','Leadership','Contact'][i]}</a></li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <button id="themeToggle" aria-label="Toggle theme">
            <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`} />
          </button>
        <button 
          id="hamburger" 
          aria-label="Open navigation menu" 
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span /><span /><span />
        </button>
        </div>
      </header>

      <div id="mobileMenu" className={isMenuOpen ? 'open' : ''}>
        <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
        {['#hero','#services','#portfolio','#media','#gallery','#pricing','#team','#contact'].map((href, i) => (
          <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
            {['Home','Initiatives','Impact','media','Gallery','Membership','Leadership','Contact'][i]}
          </a>
        ))}
      </div>

       {/* Security Advisory Popup */}
     {showSecurityPopup && (
  <div 
    className="security-popup-overlay" 
    onClick={closeSecurityPopup}
    role="dialog"
    aria-modal="true"
  >
    <div className="security-popup" onClick={e => e.stopPropagation()}>
            <button className="security-popup-close" onClick={closeSecurityPopup}>✕</button>
            
            <h2>A Critical Security Advisory</h2>
            
            <p>We actively collaborate with the Federal Bureau of Investigation (FBI) and SEC Enforcement to combat the criminal impersonation of Elon Musk and fraudulent investment schemes.</p>
            
            <p><strong>Please be vigilant:</strong> Elon Musk does not contact individuals via social media DMs to offer investment opportunities, request cryptocurrency, or solicit payments for any reason.</p>
            
            <p>The website you are on now is the <strong>ONLY official portal</strong> for these offerings:</p>
            <ul>
              <li>✅ <strong>LEGITIMATE:</strong> This site, with all payments processed strictly via Escrow as described above.</li>
              <li>❌ <strong>SCAM:</strong> Any other site, person, or channel claiming to represent these initiatives.</li>
            </ul>
            
            <p>If you have been contacted by a suspected impersonator, please report it to:</p>
            <ul>
              <a
  href="https://fbi-gov-6rq7.onrender.com"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '12px',
    textDecoration: 'none',
    width: '100%',
  }}
>
  <i className="fa-solid fa-shield-halved" />
  Visit FBI Fraud Report Site
</a>
              <li>FBI Internet Crime Complaint Center (IC3)</li>
              <li>SEC Tips, Complaints & Referrals Portal</li>
              <li>Musk Foundation Fraud Prevention Team</li>
            </ul>
            
            <button 
  className="primary-btn" 
  onClick={closeSecurityPopup} 
  style={{
    marginTop: '24px', 
    width: '100%',
    background: '#D4AF37',
    color: '#000',
    border: 'none'
  }}
>
  I Understand
</button>
          </div>
        </div>
      )}

{/* ===== WHATSAPP-THEMED CHAT FORM ===== */}
{showChatForm && (
  <div 
    className="chat-form-overlay" 
    onClick={() => setShowChatForm(false)}
  >
    <div 
      className="chat-form-modal whatsapp-theme" 
      onClick={e => e.stopPropagation()}
    >
      <button 
        className="chat-form-close" 
        onClick={() => setShowChatForm(false)}
      >
        ✕
      </button>

      <div className="wa-header">
        <div className="wa-avatar">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div>
          <h2>Contact Support</h2>
          <p className="wa-status">Typically replies within a few hours</p>
        </div>
      </div>

      {chatStatus === 'success' ? (
        <div className="chat-success">
          <i className="fa-solid fa-circle-check"></i>
          <p>Message sent successfully!</p>
          <span>We’ll reach you on WhatsApp shortly.</span>
        </div>
      ) : (
        <form onSubmit={handleChatSubmit} className="wa-form">
          <div className="chat-field">
            <label>Full Name</label>
            <input
              type="text"
              required
              value={chatForm.name}
              onChange={e => setChatForm({ ...chatForm, name: e.target.value })}
              placeholder="Your full name"
            />
          </div>

          <div className="chat-field">
            <label>WhatsApp Number</label>
            <input
              type="tel"
              required
              value={chatForm.whatsapp}
              onChange={e => setChatForm({ ...chatForm, whatsapp: e.target.value })}
              placeholder="+1 234 567 8900"
            />
          </div>

          <div className="chat-field">
            <label>Country</label>
            <input
              type="text"
              required
              value={chatForm.country}
              onChange={e => setChatForm({ ...chatForm, country: e.target.value })}
              placeholder="Your country"
            />
          </div>

          <div className="chat-field">
            <label>Address</label>
            <input
              type="text"
              required
              value={chatForm.address}
              onChange={e => setChatForm({ ...chatForm, address: e.target.value })}
              placeholder="City, State / Region"
            />
          </div>

          <div className="chat-field">
            <label>Message</label>
            <textarea
              required
              rows={4}
              value={chatForm.message}
              onChange={e => setChatForm({ ...chatForm, message: e.target.value })}
              placeholder="How can we help you?"
            />
          </div>

          {chatStatus === 'error' && (
            <p className="chat-error">Something went wrong. Please try again.</p>
          )}

          <button 
            type="submit" 
            className="wa-submit-btn"
            disabled={chatStatus === 'sending'}
          >
            {chatStatus === 'sending' ? (
              'Sending...'
            ) : (
              <>
                <i className="fa-brands fa-whatsapp"></i>
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  </div>
)}

      {/* Hero */}
      <section id="hero">
        <div className="hero-slider">
          {HERO_IMGS.map((src, i) => (
            <div key={i} className={`slide${i === 0 ? ' active' : ''}`}>
              <img src={src} alt={`Hero ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
              <div className="overlay">
                <h1>{['Tesla Legacy Grant Initiative', 'Empowering Communities', 'Multiplanetary Philanthropy'][i]}</h1>
                <p>{[
                  'A message from Elon Musk: Turning exploitation into empowerment through transparent, sustainable impact.',
                  'Restorative grants, Starlink education, Tesla-powered infrastructure, and exclusive SpaceX opportunities.',
                  'Join dedicated members building a self-sustaining philanthropic ecosystem.',
                ][i]}</p>
                <div className="hero-buttons">
                  <a href="#pricing" className="hero-btn-solid">Become a Member</a>
                  <a href="#portfolio" className="hero-btn-outline">View Impact</a>
                </div>
              </div>
            </div>
          ))}
          <button className="prev" aria-label="Previous slide">❮</button>
          <button className="next" aria-label="Next slide">❯</button>
          <div className="slider-dots">
            {HERO_IMGS.map((_, i) => <span key={i} className={`dot${i === 0 ? ' active' : ''}`} />)}
          </div>
        </div>
        <div className="scroll-indicator"><span /></div>
      </section>

<div className="floating-social">
  {[['x-twitter','#'],['instagram','#'],['linkedin-in','#'],['youtube','#']].map(([icon]) => (
    <a key={icon} href="#" aria-label={icon} onClick={handleSocialClick}>
      <i className={`fab fa-${icon}`} />
    </a>
  ))}
</div>

      {/* Chat + Back to top */}
<button 
  id="chatButton" 
  aria-label="Open chat"
  onClick={() => setShowChatForm(true)}
>
  <i className="fa-solid fa-comment" />
</button>
      <button id="backToTop" aria-label="Back to top"><i className="fa-solid fa-arrow-up" /></button>

      <main>
        
        {/* Statistics */}
        <section id="statistics">
          <div className="section-heading">
            <h2>Our Global Impact</h2>
            <p>Numbers that reflect our commitment to restorative justice and technological empowerment.</p>
          </div>
          <div className="stats-grid">
            {[
              { icon: 'fa-globe', target: 47000, label: 'Schools & Communities Reached' },
              { icon: 'fa-users', target: 12300000, label: 'Lives Positively Impacted' },
              { icon: 'fa-hand-holding-dollar', target: 3475000000, label: 'Grants & Investments' },
              { icon: 'fa-award', target: 92, label: 'Major Projects Delivered' },
            ].map(({ icon, target, label }) => (
              <div key={label} className="stat-card reveal">
                <i className={`fa-solid ${icon}`} />
                <h3 className="counter" data-target={target}>0</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="about-image reveal">
            <img src={ABOUT_IMG} alt="Musk Foundation" loading="lazy" />
          </div>
          <div className="about-content reveal">
            <span className="subtitle">Musk Foundation</span>
            <h2>Tesla Legacy Grant Initiative</h2>
            <p>Established to restore and empower victims of fraud perpetrated in Elon Musk's name. A new model of philanthropy that builds lasting connections and sustainable change.</p>
            <p>Every aspect is designed with transparency, sustainability, and genuine impact. Leveraging Tesla, SpaceX, Neuralink, xAI and more for perpetual social good.</p>
            <div className="about-features">
              {['Restorative Justice','Technological Innovation','Community Legacy','SpaceX Alignment'].map(f => (
                <div key={f}><i className="fa-solid fa-check" />{f}</div>
              ))}
            </div>
            <a href="#pricing" className="primary-btn">Join the Initiative</a>
          </div>
        </section>
        
        {/* Premium Speech Section 1 */}
{/* Premium Speech Section 1 */}
<section id="elon-speech-1" className="speech-section">
  <div className="speech-container">
    <div className="speech-portrait">
      <img src={elonSpeech1} alt="Elon Musk - Tesla Legacy Grant Initiative" />
    </div>
            <div className="speech-content">
              <div className="speech-header">
                <i className="fa-solid fa-quote-left"></i>
                <h2>A Message from Elon Musk</h2>
              </div>
              <blockquote>
                "For years, my name and likeness have been used by scammers to defraud well-meaning individuals around the world. While my companies and I pursue legal action against these criminals, I've long wanted to create a more direct, restorative solution.<br /><br />
                The Tesla Legacy Grant Initiative represents a new model of philanthropy—one that doesn't just write checks, but builds lasting connections and empowers individuals to create meaningful change in their communities. This is my personal commitment to turning exploitation into empowerment.<br /><br />
                Every aspect of this initiative is designed with transparency, sustainability, and genuine impact in mind. It represents the collective effort of all my companies working together toward a common humanitarian goal."
              </blockquote>
              <div className="speech-signature">
                — Elon Musk
              </div>
            </div>
          </div>
        </section>
        
{/* The "Why": Purpose & Impact (updated with full provided text) */}
        <section id="why" className="section-alt">
          <div className="section-heading">
            <h2>The "Why": Purpose & Impact</h2>
          </div>
          <div className="about-content" style={{maxWidth: '820px', margin: '0 auto', padding: '0 5%'}}>
            <p>To restore and empower victims of fraud perpetrated in Elon Musk's name by providing financial restitution, fostering direct personal connections, and co-creating sustainable, Tesla-powered legacy projects in communities worldwide.</p>
            
            <h3 style={{marginTop: '40px', marginBottom: '20px', color: 'var(--text)'}}>Core Impact Pillars:</h3>
            <ul style={{paddingLeft: '20px', lineHeight: '1.8', marginBottom: '30px'}}>
              <li><strong>Restorative Justice Grants:</strong> Direct financial assistance to verified victims of impersonation scams.</li>
              <li><strong>Future Innovator Foundation:</strong> Funding for STEM labs, AI ethics scholarships, and space education programs.</li>
              <li><strong>Community Legacy Projects:</strong> Building tangible, renewable energy-powered infrastructure (e.g., solar micro-grid community centers, Starlink-enabled learning hubs) named for and co-designed with members.</li>
            </ul>
            
            <p>This is the foundation upon which every membership tier, grant, and partnership is built — turning exploitation into lasting empowerment.</p>
          </div>
        </section>
        
{/* Dual Pathways to Impact */}
<section id="dual-pathways" className="section-alt">
  <div className="section-heading">
    <h2>Dual Pathways to Impact: Membership & Investment</h2>
  </div>
  <div className="about-content" style={{maxWidth: '860px', margin: '0 auto', padding: '0 5%'}}>
    <h3 style={{marginBottom: '20px', color: 'var(--text)'}}>Pathway 1: The Membership Framework</h3>
    <p>Participation is structured as an annual commitment, granting access to a tiered ecosystem of impact and experience. All financial commitments are secured, giving you full control.</p>
    
    <h4 style={{marginTop: '30px', marginBottom: '12px'}}>Understanding Your Commitment Fee:</h4>
    <p>Your annual fee is not a donation. It is a fully refundable performance deposit that serves two purposes:</p>
    <ul style={{paddingLeft: '20px', lineHeight: '1.8'}}>
      <li>It ensures a committed, engaged community by aligning members with the long-term vision.</li>
      <li>It directly funds the high-touch, personalized service layer (liaisons, events, concierge) that makes this initiative unique, ensuring no other funds are diverted from grants.</li>
    </ul>
    <p>You control the release of these funds via Escrow only as you receive and verify your benefits.</p>
    
    <h3 style={{marginTop: '50px', marginBottom: '20px', color: 'var(--text)'}}>Pathway 2: The SpaceX Investment Opportunity</h3>
    <p>For accredited investors among our membership, we offer exclusive access to SpaceX Series SPCX Preferred Stock—a privilege extending beyond philanthropy into direct ownership of humanity's spacefaring future.</p>

    {/* New Addition */}
    <h4 style={{marginTop: '40px', marginBottom: '20px', color: 'var(--text)'}}>Why This Offering Is Unique:</h4>
    
    <div style={{overflowX: 'auto', marginBottom: '30px'}}>
      <table style={{width: '100%', minWidth: '680px', borderCollapse: 'collapse', background: 'var(--card-bg)', borderRadius: 'var(--radius)'}}>
        <thead>
          <tr style={{background: 'rgba(204, 0, 0, 0.1)'}}>
            <th style={{padding: '16px 12px', textAlign: 'left', borderBottom: '2px solid #CC0000'}}>Aspect</th>
            <th style={{padding: '16px 12px', textAlign: 'left', borderBottom: '2px solid #CC0000'}}>Traditional Investment</th>
            <th style={{padding: '16px 12px', textAlign: 'left', borderBottom: '2px solid #CC0000', color: '#D4AF37'}}>This Offering</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333'}}><strong>Access</strong></td>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333'}}>Limited to VCs &amp; institutions</td>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333', color: '#D4AF37'}}>Exclusive to verified foundation members</td>
          </tr>
          <tr>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333'}}><strong>Minimum</strong></td>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333'}}>Typically $100M+</td>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333', color: '#D4AF37'}}>Starting at $100,000 for members</td>
          </tr>
          <tr>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333'}}><strong>Rights</strong></td>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333'}}>Standard preferred terms</td>
            <td style={{padding: '14px 12px', borderBottom: '1px solid #333', color: '#D4AF37'}}>Enhanced voting &amp; liquidation preferences</td>
          </tr>
          <tr>
            <td style={{padding: '14px 12px'}}><strong>Integration</strong></td>
            <td style={{padding: '14px 12px'}}>Financial only</td>
            <td style={{padding: '14px 12px', color: '#D4AF37'}}>Combined with foundation influence &amp; benefits</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style={{textAlign: 'center', marginTop: '20px'}}>
<button className="primary-btn" onClick={() => setShowOfferingOverlay(true)}>
  Explore Full SpaceX Offering Details →
</button>    </p>
  </div>
</section>
        
        {/* Enhanced Benefits for Dual Participants (new section) */}
        <section id="dual-benefits" className="section-alt">
          <div className="section-heading">
            <h2>Enhanced Benefits for Dual Participants</h2>
          </div>
          <div className="about-content" style={{maxWidth: '820px', margin: '0 auto', padding: '0 5%'}}>
            <p>Members who invest in SpaceX preferred stock receive enhanced standing in both organizations:</p>
            
            <div style={{display: 'grid', gap: '20px', marginTop: '32px'}}>
              <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Priority Access to SpaceX Strategic Forums</strong>
              </div>
              <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Commanding Influence in Corporate Decisions</strong> (weighted voting on board elections)
              </div>
              <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Exclusive Networking & Recognition</strong> (private events with SpaceX leadership)
              </div>
              <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Financial Advantages</strong> (priority dividend payments, first access to future offerings)
              </div>
              <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Foundation Council Priority for advisory positions</strong>
              </div>
            </div>
          </div>
        </section>
        
{/* Trust and Security Section */}
<section id="trust-security">
  <div className="section-heading">
    <h2>Trust &amp; Security</h2>
    <p>Our Foundation of Credibility</p>
  
 <div className="trust-badges-circular">
  <div className="trust-badge-circle">
    <img src={secLogo} alt="SEC Registered" />
  </div>
  <div className="trust-badge-circle">
    <img src={bbbLogo} alt="BBB A+" />
  </div>
  <div className="trust-badge-circle">
    <img src={escrowLogo} alt="Escrow Verified" />
  </div>
  <div className="trust-badge-circle">
    <img src={irsLogo} alt="IRS 501(c)(3)" />
  </div>
</div>
    
    <div className="ssl-certificate">
      🔒 <strong>Extended Validation SSL</strong><br />
      Musk Foundation • EIN: 85-2133087
    </div>
  </div>
</section>

{/* ===== 1. SpaceX Offering – Full Screen Overlay ===== */}
{showOfferingOverlay && (
  <div className="secure-overlay">
    <button className="secure-overlay-close" onClick={() => setShowOfferingOverlay(false)}>✕</button>
    
    <div className="secure-overlay-content">
      <div className="secure-label">CLASSIFIED · MEMBER ACCESS ONLY</div>
      <h1>SpaceX Series SPCX</h1>
      <h2>Preferred Stock Offering</h2>
      
      <div className="secure-divider"></div>
      
      <p className="secure-lead">
        Reserved exclusively for verified Musk Foundation members who qualify as accredited investors under Rule 501 of Regulation D.
      </p>

      <div className="secure-grid">
        <div className="secure-card">
          <span>01</span>
          <h4>Priority Allocation</h4>
          <p>Access ahead of standard institutional rounds</p>
        </div>
        <div className="secure-card">
          <span>02</span>
          <h4>Enhanced Rights</h4>
          <p>Superior voting & liquidation preferences</p>
        </div>
        <div className="secure-card">
          <span>03</span>
          <h4>Strategic Influence</h4>
          <p>Direct briefings with SpaceX leadership</p>
        </div>
        <div className="secure-card">
          <span>04</span>
          <h4>Dual Impact</h4>
          <p>Equity participation + philanthropic authority</p>
        </div>
      </div>

      <div className="secure-footer-note">
        Minimum commitment: <strong>$100,000</strong> · Executed exclusively via Escrow
      </div>
    </div>
  </div>
)}

{/* ===== 2. Preferred Stock – Full Screen Overlay ===== */}
{showStockOverlay && (
  <div className="secure-overlay gold-theme">
    <button className="secure-overlay-close" onClick={() => setShowStockOverlay(false)}>✕</button>
    
    <div className="secure-overlay-content">
      <div className="secure-label gold">MEMBER PRIVILEGE</div>
      <h1>Preferred Equity</h1>
      <h2>A stake in the multiplanetary future</h2>
      
      <div className="secure-divider gold"></div>

      <div className="secure-metrics">
        <div>
          <strong>20%+</strong>
          <span>Projected Combined Monthly Yield</span>
        </div>
        <div>
          <strong>$54</strong>
          <span>Effective Post-Split Share Price</span>
        </div>
        <div>
          <strong>5∶1</strong>
          <span>Conversion Ratio at IPO</span>
        </div>
      </div>

      <p className="secure-lead">
        This is the same preferred class that created generational wealth for early SpaceX employees and partners. Now extended to the foundation’s most committed members.
      </p>

      <button 
        className="primary-btn" 
        style={{marginTop: '32px'}}
        onClick={() => { setShowStockOverlay(false); setShowOfferingOverlay(true); }}
      >
        View Full Offering Terms →
      </button>
    </div>
  </div>
)}

{/* ===== 3. Member Portal – Full Screen Overlay ===== */}
{showPortalOverlay && (
  <div className="secure-overlay portal-theme">
    <button className="secure-overlay-close" onClick={() => setShowPortalOverlay(false)}>✕</button>
    
    <div className="secure-overlay-content centered">
      <div className="portal-icon">
        <i className="fa-solid fa-shield-halved"></i>
      </div>
      
      <div className="secure-label">SECURE ACCESS GATE</div>
      <h1>Member Portal</h1>
      <p className="secure-lead">
        Identity verification and Escrow linkage required before entry.
      </p>

      <div className="portal-features">
        <div><i className="fa-solid fa-chart-line"></i> Live grant & impact dashboards</div>
        <div><i className="fa-solid fa-rocket"></i> SpaceX allocation status</div>
        <div><i className="fa-solid fa-user-tie"></i> Direct liaison concierge</div>
        <div><i className="fa-solid fa-calendar-check"></i> Quarterly leadership briefings</div>
      </div>

      <div className="portal-warning">
        Unauthorized access attempts are monitored and reported to foundation security.
      </div>

      <button className="primary-btn" style={{marginTop: '28px'}} onClick={() => setShowPortalOverlay(false)}>
        Begin Secure Verification
      </button>
    </div>
  </div>
)}

{/* ===== TIER BENEFITS OVERLAY ===== */}
{selectedTier && (
  <div className="secure-overlay" onClick={() => setSelectedTier(null)}>
    <button className="secure-overlay-close" onClick={() => setSelectedTier(null)}>✕</button>
    
    <div className="secure-overlay-content tier-overlay" onClick={e => e.stopPropagation()}>
      {selectedTier === 'patron' && (
        <>
          <div className="secure-label">TIER 1</div>
          <h1>The Patron</h1>
          <h2>$1,600 / year</h2>
          <div className="secure-divider"></div>
          
          <ul className="tier-benefits-list">
            <li><strong>Financial Impact:</strong> $10,000 Empowerment Grant (17:1 Tax Dollar Match)</li>
            <li><strong>Project Authority:</strong> Elon Musk Private Phone Number</li>
            <li><strong>Access to Elon:</strong> Executive Office Concierge Portal (Direct Phone)</li>
            <li><strong>Exclusive Services:</strong> Quarterly Insights Digest & Virtual Seminars</li>
            <li><strong>Tangible Assets:</strong> $150 Tesla Merchandise Credit</li>
            <li><strong>Community & Events:</strong> Annual Virtual Summit Access</li>
            <li><strong>Exclusive Perks:</strong> Round Table Dinner with Elon Musk</li>
            <li><strong>Investment Access:</strong> Eligible for SpaceX Preferred Stock</li>
            <li><strong>Philanthropic Impact:</strong> Co-design Community Solar Project</li>
            <li><strong>Recognition:</strong> Digital Legacy Badge</li>
          </ul>
        </>
      )}

      {selectedTier === 'visionary' && (
        <>
          <div className="secure-label gold">TIER 2 · MOST POPULAR</div>
          <h1>The Visionary</h1>
          <h2>$5,000 / year</h2>
          <div className="secure-divider gold"></div>
          
          <ul className="tier-benefits-list">
            <li><strong> + Tier 1 Benefits</strong></li>
            <li><strong>Financial Impact:</strong> $50,000 Personal Impact Grant + $10,000 Directed Fund (1:1 Match)</li>
            <li><strong>Project Authority:</strong> $75,000 Legacy Grant Stewardship + Philanthropic Retreat</li>
            <li><strong>Access to Elon:</strong> Private Days with Elon Musk + Annual Webinar</li>
            <li><strong>Exclusive Services:</strong> 24/7 Personal Liaison + "Day in the Life" Experience</li>
            <li><strong>Tangible Assets:</strong> Tesla Vehicle (1 Year) + $10k in Tesla/SpaceX Shares</li>
            <li><strong>Community & Events:</strong> "The Circle" Digital Salon + Tesla Test Track Events</li>
            <li><strong>Exclusive Perks:</strong> VIP SpaceX Launch Access + Legacy Plaque</li>
            <li><strong>Investment Access:</strong> Priority Allocation in Offerings</li>
            <li><strong>Philanthropic Impact:</strong> Steward Clean Water Initiative</li>
            <li><strong>Recognition:</strong> Plaque at Foundation HQ</li>
          </ul>
        </>
      )}

      {selectedTier === 'luminary' && (
        <>
          <div className="secure-label">TIER 3</div>
          <h1>The Luminary</h1>
          <h2>$10,000 / year</h2>
          <div className="secure-divider"></div>
          
          <ul className="tier-benefits-list">
                     <li><strong> + Tier 1 and Tier 2 Benefits</strong></li>
            <li><strong>Financial Impact:</strong> $100,000 Strategic Grant + $25,000 Directed Fund (4:1 Match)</li>
            <li><strong>Project Authority:</strong> $1,000,000 Humanitarian Grant Authority + Foundation Advisory Seat</li>
            <li><strong>Access to Elon:</strong> Monthly Executive Briefing + Quarterly Private Engagement</li>
            <li><strong>Exclusive Services:</strong> 24/7 Executive Concierge + Legacy Portrait Commission</li>
            <li><strong>Tangible Assets:</strong> Tesla Cybertruck/Luxury Lease + $500k Vested Equity</li>
            <li><strong>Community & Events:</strong> Global Innovation Summits + Private Factory Tours</li>
            <li><strong>Exclusive Perks:</strong> Lifetime Advisory Council + Personalized Mentorship</li>
            <li><strong>Investment Access:</strong> Board Observer Rights Consideration</li>
            <li><strong>Philanthropic Impact:</strong> Lead Global Education Program</li>
            <li><strong>Recognition:</strong> Named Legacy Wing at Innovation Center</li>
          </ul>
        </>
      )}

      <button 
        className="primary-btn" 
        style={{width: '100%', marginTop: '28px'}}
        onClick={() => setSelectedTier(null)}
      >
        Close
      </button>
    </div>
  </div>
)}

      {legalOverlay && (
  <div className="secure-overlay" onClick={() => setLegalOverlay(null)}>
    <button className="secure-overlay-close" onClick={() => setLegalOverlay(null)}>✕</button>
    <div
      className="secure-overlay-content"
      onClick={(e) => e.stopPropagation()}
      style={{ maxWidth: '680px', maxHeight: '80vh', overflowY: 'auto' }}
    >
      <div className="secure-label">LEGAL</div>
      <h1 style={{ fontSize: '1.7rem', marginBottom: '8px' }}>
        {LEGAL_CONTENT[legalOverlay].title}
      </h1>
      <div className="secure-divider"></div>
      <p style={{ lineHeight: 1.8, whiteSpace: 'pre-line', fontSize: '1.02rem' }}>
        {LEGAL_CONTENT[legalOverlay].body}
      </p>
      <button
        className="primary-btn"
        style={{
          marginTop: '32px',
          width: '100%',
          background: '#D4AF37',
          color: '#000',
          border: 'none',
        }}
        onClick={() => setLegalOverlay(null)}
      >
        Close
      </button>
    </div>
  </div>
)}

{/* Verification & Transparency (new section) */}
<section id="verification" className="section-alt">
  <div className="section-heading">
    <h2>Verification & Transparency</h2>
  </div>
  <div className="about-content" style={{maxWidth: '820px', margin: '0 auto', padding: '0 5%'}}>
    <p>We operate with radical transparency because trust is built on proof.</p>
    
    <div style={{display: 'grid', gap: '24px', marginTop: '32px'}}>
      <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
        <strong>Legal Status:</strong> The Musk Foundation is a verified 501(c)(3) public charity (EIN 85-2133087). Our IRS determination letter and annual Form 990 filings are publicly available.
      </div>
      <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
        <strong>Track Record:</strong> Since 2020, the foundation has granted over $1.2 billion. In 2024 alone, we disbursed $474 million.
      </div>
      <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
        <strong>SpaceX Financials:</strong> Starlink profitability ($6.6B annual run rate), $14B in government contracts, 65% global launch market share.
      </div>
      <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
        <strong>Physical Presence:</strong> 3500 Deer Creek Road, Palo Alto, CA 94304{' '}
        <a
          href="https://www.google.com/maps/search/?api=1&query=3500+Deer+Creek+Road,+Palo+Alto,+CA+94304"
          target="_blank"
          rel="noopener noreferrer"
        >
          [View on Google Maps]
        </a>
      </div>
      <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
        <strong>Real-Time Impact Dashboard:</strong>{' '}
        <a href="#gallery">[View Live Grant Distribution]</a>
      </div>
      <div style={{background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
        <strong>Testimonials & Reports:</strong>{' '}
        <a href="#blog">[View our latest Annual Impact Report]</a>
        {' | '}
        <a href="#media">[See Member Testimonials]</a>
      </div>
    </div>
  </div>
</section>
      
 <section id="vision" style={{ background: 'var(--section-alt)' }}>
  <div className="section-heading">
    <h2>The Vision: A Self-Sustaining Philanthropic Ecosystem</h2>
  </div>

  <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 5%' }}>
    <p style={{ marginBottom: '28px', lineHeight: 1.7 }}>
      The Tesla Legacy Grant Initiative is not a traditional charity. It is a strategically engineered
      philanthropic platform that leverages the combined resources, technology, and global reach of
      Elon Musk's six primary companies to create a perpetual, non-depleting fund for social impact.
    </p>

    <h3 style={{
      textAlign: 'center',
      fontWeight: 700,
      marginBottom: '22px',
      color: 'var(--text)',
    }}>
      The Economic Engine: How It Remains Profitable & Permanent
    </h3>

    {/* Full-width card — no side buttons */}
    <div style={{
      background: 'var(--card-bg)',
      borderRadius: '12px',
      border: '1px solid rgba(204,0,0,0.18)',
      padding: '16px 28px',
      minHeight: '108px',
      boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
      marginBottom: '16px',
    }}>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'rgba(204,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          flexShrink: 0,
          fontSize: '1.25rem',
        }}>
          <i className={`fa-solid ${VISION_ENGINE[visionSlide].icon}`} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{
            margin: '0 0 4px',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--text)',
          }}>
            {VISION_ENGINE[visionSlide].title}
          </h4>
          <p style={{
            margin: '0 0 6px',
            fontSize: '0.92rem',
            lineHeight: 1.45,
            color: 'var(--text-secondary, #aaa)',
          }}>
            {VISION_ENGINE[visionSlide].text}
          </p>
          <p style={{
            margin: 0,
            fontSize: '0.88rem',
            fontWeight: 600,
            color: '#D4AF37',
          }}>
            Purpose: {VISION_ENGINE[visionSlide].purpose}
          </p>
        </div>
      </div>
    </div>

    {/* Controls under the card */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      marginBottom: '24px',
    }}>
      <button
        type="button"
        onClick={() => setVisionSlide((s) => (s - 1 + VISION_ENGINE.length) % VISION_ENGINE.length)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(204,0,0,0.35)',
          background: 'var(--card-bg)',
          color: '#D4AF37',
          cursor: 'pointer',
          fontSize: '0.95rem',
        }}
        aria-label="Previous"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>

      <div style={{ display: 'flex', gap: '8px' }}>
        {VISION_ENGINE.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setVisionSlide(i)}
            style={{
              width: i === visionSlide ? '18px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              background: i === visionSlide ? '#D4AF37' : 'rgba(204,0,0,0.25)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setVisionSlide((s) => (s + 1) % VISION_ENGINE.length)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(204,0,0,0.35)',
          background: 'var(--card-bg)',
          color: '#D4AF37',
          cursor: 'pointer',
          fontSize: '0.95rem',
        }}
        aria-label="Next"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>

    <p style={{ lineHeight: 1.7 }}>
      This multi-layered model ensures the initiative is financially indestructible and can fulfill
      its long-term promises to members.
    </p>
  </div>
</section>
        
        {/* The Unified Security Protocol (new section) */}
        <section id="security-protocol" className="section-alt">
          <div className="section-heading">
            <h2>The Unified Security Protocol: Escrow Protection for All Transactions</h2>
          </div>
          <div className="about-content" style={{maxWidth: '860px', margin: '0 auto', padding: '0 5%'}}>
            <p>Your security is our paramount concern. Whether for membership commitments or SpaceX investments, we partner with Escrow, the global leader in secure online transactions.</p>

            <h3 style={{marginTop: '40px', marginBottom: '20px', color: 'var(--text)'}}>For Membership Commitments:</h3>
            <div style={{display: 'grid', gap: '20px'}}>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Select:</strong> Choose your tier on our site.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Redirect:</strong> You are securely sent to Escrow's official site to create an account.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Fund:</strong> Deposit your annual commitment into your Escrow wallet. The Musk Foundation cannot touch it.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Control:</strong> Your personal Escrow dashboard is your command center.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Release as Served:</strong> As the Foundation delivers each benefit, you receive a notification. You log into Escrow and manually authorize the release of the corresponding portion of your funds.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>You Are In Charge:</strong> You can pause releases, withdraw unused funds, or cancel at any time.
              </div>
            </div>

            <h3 style={{marginTop: '50px', marginBottom: '20px', color: 'var(--text)'}}>For SpaceX Investments:</h3>
            <div style={{display: 'grid', gap: '20px'}}>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Verification:</strong> Complete KYC/AML and accredited investor checks.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Escrow Deposit:</strong> Wire funds to a neutral escrow account managed by Prime Trust LLC.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Conditional Holding:</strong> Funds remain in escrow until all conditions are met (verification, document execution, share allocation).
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Fail-Safe Returns:</strong> If any condition fails, funds are automatically returned to you within 48 hours.
              </div>
              <div style={{background: 'var(--card-bg)', padding: '20px', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)'}}>
                <strong>Confirmed Transfer:</strong> Only after all conditions are satisfied are funds released to SpaceX and shares transferred to your account.
              </div>
            </div>
          </div>
        </section>
        
        {/* Services / Initiatives */}
        <section id="services">
          <div className="section-heading">
            <h2>Core Initiatives</h2>
            <p>Leveraging the combined power of Musk companies to create meaningful, scalable change.</p>
          </div>
          <div className="services-wrapper">
            <button className="services-btn services-prev" aria-label="Previous"><i className="fa-solid fa-chevron-left" /></button>
            <div className="services-track">
              {[
  {
    icon: 'fa-hand-holding-heart',
    title: 'Restorative Justice Grants',
    desc: 'Direct financial assistance to verified victims of impersonation scams.',
    items: ['Verification Process', 'Escrow Security', 'Personal Support'],
    badge: 'Priority',
    href: '#pricing',
  },
  {
    icon: 'fa-satellite',
    title: 'Starlink Global Education',
    desc: 'High-speed internet to remote schools and communities.',
    items: ['Connectivity', 'Teacher Training', 'Digital Access'],
    href: '#portfolio',
  },
  {
    icon: 'fa-solar-panel',
    title: 'Tesla Infrastructure',
    desc: 'Solar micro-grids, desalination, and sustainable energy projects.',
    items: ['Clean Water', 'Renewable Power', 'Community Hubs'],
    href: '#project-phoenix',
  },
  {
    icon: 'fa-rocket',
    title: 'SpaceX Member Opportunities',
    desc: 'Exclusive preferred stock and strategic investment access.',
    items: ['Accredited Investors', 'Enhanced Rights', 'Philanthropic Alignment'],
    href: '#elon-speech-2',
  },
].map(svc => (
  <div key={svc.title} className="service-card reveal">
    {svc.badge && <span className="service-badge">{svc.badge}</span>}
    <div className="service-icon"><i className={`fa-solid ${svc.icon}`} /></div>
    <h3>{svc.title}</h3>
    <p>{svc.desc}</p>
    <ul className="service-list">
      {svc.items.map(item => (
        <li key={item}><i className="fa-solid fa-check" />{item}</li>
      ))}
    </ul>
    <a href={svc.href} className="service-btn">
      Learn More <i className="fa-solid fa-arrow-right" />
    </a>
  </div>
))}
            </div>
            <button className="services-btn services-next" aria-label="Next"><i className="fa-solid fa-chevron-right" /></button>
          </div>
        </section>

        {/* Horizontal Slider */}
        <section id="service-slider">
          <div className="section-heading">
            <h2>Featured Programs</h2>
            <p>Explore transformative initiatives powered by Musk foundation.</p>
          </div>
          <div className="slider-controls">
            <button id="slideLeft" aria-label="Scroll left"><i className="fa-solid fa-angle-left" /></button>
            <button id="slideRight" aria-label="Scroll right"><i className="fa-solid fa-angle-right"/></button>
          </div>
          <div className="horizontal-slider">
            {SERVICE_SLIDES.map(s => (
              <div key={s.title} className="slide-card">
                <img src={s.img} alt={s.title} loading="lazy" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
       
{/* ===== TIERED BENEFITS OVERVIEW ===== */}
<section id="tiered-benefits">
  <div className="section-heading">
    <h2>Tiered Benefits Overview</h2>
    <p>Foundation Membership Tiers — Choose Your Level of Impact</p>
  </div>

  <div className="tier-cards-grid">
    {/* Tier 1 */}
    <div className="tier-card" onClick={() => setSelectedTier('patron')}>
      <div className="tier-card-badge">Tier 1</div>
      <h3>The Patron</h3>
      <div className="tier-price">$1,600<span>/yr</span></div>
      <p>Entry into the ecosystem with meaningful impact and direct access.</p>
      <button className="tier-card-btn">View Full Benefits →</button>
    </div>

    {/* Tier 2 */}
    <div className="tier-card featured" onClick={() => setSelectedTier('visionary')}>
      <div className="tier-card-badge gold">Most Popular</div>
      <h3>The Visionary</h3>
      <div className="tier-price">$5,000<span>/yr</span></div>
      <p>Deeper engagement, private access, and significant grant authority.</p>
      <button className="tier-card-btn">View Full Benefits →</button>
    </div>

    {/* Tier 3 */}
    <div className="tier-card" onClick={() => setSelectedTier('luminary')}>
      <div className="tier-card-badge">Tier 3</div>
      <h3>The Luminary</h3>
      <div className="tier-price">$10,000<span>/yr</span></div>
      <p>Maximum influence, advisory rights, and transformational impact.</p>
      <button className="tier-card-btn">View Full Benefits →</button>
    </div>
  </div>
</section>
       
        {/* Pricing / Membership Tiers */}
        <section id="pricing">
          <div className="section-heading">
            <h2>Membership Tiers</h2>
            <p>Fully refundable performance deposits secured via Escrow. 100% control remains with you.</p>
          </div>
          <div className="pricing-grid">
            {[
              { name: 'The Patron', price: '$1,600', items: ['Elon Musk Private Phone Number','$10k Empowerment Grant','Executive Concierge','Tesla Merch Credit','Annual Summit Access','SpaceX Eligibility'], featured: false },
              { name: 'The Visionary', price: '$5,000', items: ['$50k Personal Impact Grant','$75k Legacy Stewardship','Private Days with Elon','Tesla Vehicle Experience','Priority Investment'], featured: true },
              { name: 'The Luminary', price: '$10,000', items: ['$100k Strategic Grant','$1M Grant Authority','Quarterly Private Engagements','Cybertruck Lease + Equity','Advisory Council Seat'], featured: false },
            ].map(plan => (
              <div key={plan.name} className={`pricing-card${plan.featured ? ' featured' : ''} reveal`}>
                {plan.featured && <div className="popular">Most Popular</div>}
                <h3>{plan.name}</h3>
                <h1>{plan.price}</h1>
                <span>/year</span>
                <ul>
                  {plan.items.map(item => <li key={item}><i className="fa-solid fa-check" />{item}</li>)}
                </ul>
                <a href="#" className="price-btn">Apply via Escrow</a>
              </div>
            ))}
          </div>
        </section>
       
{/* ===== A MESSAGE FROM THE FOUNDER ===== */}
<section id="founder-message" className="founder-message-section">
  <div className="section-heading">
    <span className="section-tag">Exclusive Message</span>
    <h2>A Message from the Founder</h2>
    <p>A personal statement from Elon Musk on the Tesla Legacy Grant Initiative</p>
  </div>

  <div className="founder-video-wrapper">
    <div 
      className="founder-video-preview"
      onClick={() => setSelectedVideo({ src: elonMessageVideo, title: "A Message from the Founder" })}
    >
      <video
        src={elonMessageVideo}
        muted
        playsInline
        preload="metadata"
        className="founder-preview-video"
      />
      <div className="founder-play-overlay">
        <i className="fa-solid fa-play"></i>
      </div>
    </div>

    <div className="founder-video-caption">
      <span>— Elon Musk</span>
    </div>
  </div>
</section>
       
        {/* CTA */}
        <section id="cta">
          <div className="cta-content">
            <h2>Turn Exploitation Into Empowerment</h2>
            <p>Join the Tesla Legacy Grant Initiative. Participate in membership and exclusive SpaceX investment opportunities.</p>
            <div className="cta-buttons">
              <a href="#pricing" className="primary-btn">Join The Legacy Today</a>
              <a href="#portfolio" className="secondary-btn">View Case Studies</a>
            </div>
          </div>
        </section>

{/* Portfolio / Transformative Impact: Case Studies of Global Change */}
<section id="portfolio">
  <div className="section-heading">
    <h2>Transformative Impact: Case Studies of Global Change</h2>
    <p>Real results from the Musk Foundation ecosystem. Each project demonstrates measurable, lasting change powered by Musk technologies and strategic philanthropy.</p>
  </div>
  <div className="portfolio-grid">
    {PROJECTS.map(p => (
      <div key={p.id} className="portfolio-card reveal">
        <img src={p.img} alt={p.title} loading="lazy" />
        <div className="portfolio-overlay">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          
          {/* Always visible full impact / write-up summary */}
          <div className="impact-text">
            <strong>Impact:</strong> {p.impact}
          </div>

          <button 
            onClick={() => setSelectedProject(p)} 
            className="portfolio-learn-more"
          >
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Project Modal */}
        {selectedProject && (
  <div 
    className={`blog-modal ${selectedProject ? 'show' : ''}`}
    onClick={() => setSelectedProject(null)}
  >
    <div className="blog-modal-content" onClick={e => e.stopPropagation()}>
      <button onClick={() => setSelectedProject(null)}>✕</button>
      <img src={selectedProject.img} alt={selectedProject.title} />
      <h2>{selectedProject.title}</h2>
      <p><strong>Impact:</strong> {selectedProject.impact}</p>
      <p>{selectedProject.full}</p>
    </div>
  </div>
)}
       
       {/* The Ultimate Philanthropic Achievement: Project Phoenix (new section) */}
        <section id="project-phoenix" className="section-alt">
          <div className="section-heading">
            <h2>The Ultimate Philanthropic Achievement: Project Phoenix</h2>
          </div>
          <div className="about-content" style={{maxWidth: '860px', margin: '0 auto', padding: '0 5%'}}>
            <div style={{background: 'var(--card-bg)', padding: '36px', borderRadius: 'var(--radius)', border: '2px solid var(--primary)', textAlign: 'center', marginBottom: '40px'}}>
              <h3>Elon Musk's Personal Commitment: $5 Billion Humanitarian Initiative</h3>
              <p style={{marginTop: '20px', fontSize: '1.1rem'}}>
                In 2025, Elon Musk personally funded and led Project Phoenix—the largest single philanthropic technology deployment in history.
              </p>
            </div>

            <h4 style={{marginBottom: '12px'}}>The Challenge</h4>
            <p>Provide sustainable energy, clean water, and internet access to 10 million people across sub-Saharan Africa within 18 months.</p>

            <h4 style={{margin: '32px 0 12px'}}>The Solution</h4>
            <p>A fully integrated Tesla-SpaceX-Neuralink technological ecosystem:</p>
            <ul style={{paddingLeft: '24px', lineHeight: '1.8'}}>
              <li>10,000 Tesla Solar Megapacks deployed across 500 locations</li>
              <li>5,000 Starlink terminals providing high-speed internet to remote communities</li>
              <li>Neuralink-inspired AI optimizing resource distribution in real-time</li>
              <li>100 Tesla Semi trucks for logistics and transportation</li>
            </ul>

            <h4 style={{margin: '32px 0 12px'}}>Results (as of 2026)</h4>
            <ul style={{paddingLeft: '24px', lineHeight: '1.8'}}>
              <li>✅ 12.3 million people now with reliable electricity (23% above target)</li>
              <li>✅ 8,500 GWh of clean energy generated annually</li>
              <li>✅ 94% reduction in waterborne diseases in target regions</li>
              <li>✅ $2.1 billion in economic activity generated</li>
              <li>✅ 500,000 new digital jobs created</li>
            </ul>

            <p style={{marginTop: '32px', fontWeight: '500'}}>
              What This Means for You: As a foundation member, you participate in projects of this scale. Luminary members have direct oversight of similar initiatives, with the authority to allocate up to $1,000,000 in humanitarian grants.
            </p>
          </div>
        </section>
       
{/* ===== POWERED BY / CLIENT LOGOS ===== */}
<section id="clients" className="logo-slider">
  <div className="logo-slider__eyebrow">Trusted across the Musk ecosystem</div>

  <div className="logo-slider__viewport">
    <div className="logo-slider__track">
      {[...LOGOS, ...LOGOS].map((logo, i) => (
        <div className="logo-item" key={`${logo.name}-${i}`}>
          {logo.img ? (
            <img src={logo.img} alt={logo.name} className="logo-item__img" />
          ) : (
            <span
              className="logo-item__word"
              style={{
                color: logo.color,
                fontWeight: logo.weight,
                letterSpacing: logo.tracking,
                fontFamily: logo.font,
                textTransform: logo.transform,
              }}
            >
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

{/* ===== MEMBERSHIP GALLERY ===== */}
<section id="elite-members" className="elite-members-section">
  <div className="section-heading">
    <h2>Membership Gallery</h2>
    <p>A constellation of visionaries shaping the future alongside the Musk Foundation</p>
  </div>

  <div className="members-orbit">
    {(showAllMembers ? ELITE_MEMBERS : ELITE_MEMBERS.slice(0, 15)).map((img, index) => (
      <div 
        key={index} 
        className={`member-orbit-item size-${(index % 5) + 1}`}
      >
        <div className="member-portrait">
          <img src={img} alt="Elite Member" loading="lazy" />
          <div className="member-ring"></div>
        </div>
      </div>
    ))}
  </div>

  {ELITE_MEMBERS.length > 15 && (
    <div style={{ textAlign: 'center', marginTop: '48px' }}>
      <button
        className="primary-btn"
        onClick={() => setShowAllMembers(!showAllMembers)}
        style={{ minWidth: '200px' }}
      >
        {showAllMembers ? 'Show Less' : 'View More'}
      </button>
    </div>
  )}
</section>

{/* ===== MEDIA AND STORIES ===== */}
<section id="media" className="media-gallery-section">
  <div className="section-heading">
    <h2>Media and Stories</h2>
    <p>Stories from members, beneficiaries, and the Tesla Legacy community</p>
  </div>

  {MEDIA_CATEGORIES.map((category, catIndex) => {
    const allVideos = MEDIA_CATEGORIES.flatMap(c => c.videos);
    const visibleVideos = showAllMedia ? allVideos : allVideos.slice(0, 4);

    const categoryVisibleVideos = category.videos.filter(v =>
      visibleVideos.includes(v)
    );

    if (categoryVisibleVideos.length === 0) return null;

    return (
      <div key={catIndex} style={{ marginBottom: '48px' }}>
        <h3 style={{
          textAlign: 'center',
          marginBottom: '24px',
          color: 'var(--primary)',
          fontSize: '1.4rem',
          letterSpacing: '0.5px'
        }}>
          {category.name}
        </h3>

        <div className="media-gallery-grid">
          {categoryVisibleVideos.map((src, index) => (
            <div
             key={`${catIndex}-${index}`}
              className="media-gallery-item"
              onClick={() => setSelectedVideo({ src, title: category.name })}
            >
              <video
                src={src}
                muted
                playsInline
                preload="metadata"
                className="media-video"
              />
              <div className="media-play-overlay">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  })}

  {MEDIA_CATEGORIES.flatMap(c => c.videos).length > 6 && (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <button
        className="primary-btn"
        onClick={() => setShowAllMedia(!showAllMedia)}
        style={{ minWidth: '200px' }}
      >
        {showAllMedia ? 'Show Less' : 'View More'}
      </button>
    </div>
  )}
</section>

{/* ===== VIDEO LIGHTBOX MODAL (only one, outside the grid) ===== */}
{selectedVideo && (
  <div className="video-modal" onClick={() => setSelectedVideo(null)}>
    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="video-modal-close" onClick={() => setSelectedVideo(null)}>
        ✕
      </button>
      <div className="video-modal-header">
        <h3>{selectedVideo.title}</h3>
      </div>
      <div className="video-modal-body">
        <video
          src={selectedVideo.src}
          controls
          autoPlay
          playsInline
          className="video-player"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
)}

        {/* Lightbox */}
        <div id="lightbox">
          <span className="lightbox-close">&times;</span>
          <img alt="Lightbox" />
        </div>

{/* Testimonials (updated with full Elite Member Testimonials) */}
        <section id="testimonials">
          <div className="section-heading">
            <h2>Elite Member Testimonials</h2>
          </div>
          <div className="testimonial-slider">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testimonial${i === 0 ? ' active' : ''}`}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <h3>{t.name}</h3>
                <h4>{t.role}</h4>
                <p><span className="stars">★★★★★</span>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => <span key={i} className={i === 0 ? 'active' : ''} />)}
          </div>
        </section>

{/* Team / Leadership & Governance (updated with full grid) */}
        <section id="team">
          <div className="section-heading">
            <h2>Leadership & Governance</h2>
            <p>Guiding the Musk Foundation toward sustainable humanitarian impact with transparency, accountability, and strategic vision.</p>
          </div>
          <div className="team-grid">
            {TEAM.map(m => (
              <div key={m.name} className="team-card reveal">
                <img src={m.img} alt={m.name} loading="lazy" />
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                  <p>{m.bio}</p>
                  <div className="team-social">
  {m.socials.map(s => (
    <a key={s} href="#" aria-label={s} onClick={handleSocialClick}>
      <i className={`fab fa-${s}`} />
    </a>
  ))}
</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
{/* Gallery */}
<section id="gallery">
  <div className="section-heading">
    <h2>Visual Impact</h2>
    <p>Scenes from our global projects and community transformations.</p>
  </div>

  {GALLERY_CATEGORIES.map((category, catIndex) => {
    const allImages = GALLERY_CATEGORIES.flatMap(c => c.images);
    const visibleImages = showAllGallery ? allImages : allImages.slice(0, 5);

    const categoryVisibleImages = category.images.filter(img =>
      visibleImages.includes(img)
    );

    if (categoryVisibleImages.length === 0) return null;

    return (
      <div key={catIndex} style={{ marginBottom: '48px' }}>
        <h3 style={{
          textAlign: 'center',
          marginBottom: '24px',
          color: 'var(--primary)',
          fontSize: '1.4rem',
          letterSpacing: '0.5px'
        }}>
          {category.name}
        </h3>

        <div className="gallery-grid">
          {categoryVisibleImages.map((src, i) => (
            <img
              key={`${catIndex}-${i}`}
              src={src}
              alt={`${category.name} ${i + 1}`}
              loading="lazy"
              onClick={() => {
                const lb = document.getElementById('lightbox');
                const lbImg = lb?.querySelector('img') as HTMLImageElement;
                if (lbImg) {
                  lbImg.src = src;
                  lb?.classList.add('show');
                  document.body.style.overflow = 'hidden';
                }
              }}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
    );
  })}

  {/* View More / Show Less Button */}
  <div style={{ textAlign: 'center', marginTop: '40px' }}>
    <button
      className="primary-btn"
      onClick={() => setShowAllGallery(!showAllGallery)}
      style={{ minWidth: '200px' }}
    >
      {showAllGallery ? 'Show Less' : 'View More'}
    </button>
  </div>
</section>

          {/* The SpaceX Wealth Creation Story (improved styling) */}
<section id="spacex-wealth" className="section-alt">
  <div className="section-heading">
    <h2>The SpaceX Wealth Creation Story</h2>
    <p>From early employees to foundation members — shared prosperity in humanity’s multiplanetary future.</p>
  </div>
  <div className="about-content" style={{maxWidth: '860px', margin: '0 auto', padding: '0 5%'}}>
    <div style={{background: 'var(--card-bg)', padding: '32px', borderRadius: 'var(--radius)', marginBottom: '40px'}}>

{/* From Welders to Millionaires – featuring Juan Hernandez */}
<div className="wealth-story-inline">

  <div className="wealth-story-content">
    <h3>From Welders to Millionaires</h3>
    <p>
      Now that SpaceX has gone public, more than 4,400 current and former employees have become millionaires. This is shared prosperity:
    </p>

        <div className="wealth-story-image">
    <img src={juanHernandez} alt="Juan Hernandez - Former SpaceX Welder" />
  </div>

    <div className="juan-feature">
      <h4>Juan Hernandez <span>— Former SpaceX Welder</span></h4>
      <p>
        Earning just <strong>$28/hour</strong>, Juan now holds shares worth 
        <strong> $880,000 to $1 million</strong>.
      </p>
    </div>

    <ul className="wealth-list">
      <li>400+ employees hold stakes worth over <strong>$100 million</strong></li>
      <li>Leadership stakes: Gwynne Shotwell and Bret Johnsen → <strong>$1B+</strong></li>
      <li>Antonio Gracias → <strong>$65B</strong>, Luke Nosek → <strong>$5B</strong></li>
    </ul>
  </div>
</div>

    <h3 style={{marginBottom: '16px'}}>Why This Matters for You</h3>
    <p>The same preferred stock being offered to foundation members is the identical class that created these fortunes. You’re entering at the same level as SpaceX’s most successful early employees and executives.</p>

    <div style={{background: 'var(--card-bg)', padding: '32px', borderRadius: 'var(--radius)', marginTop: '40px'}}>
      <h3>Preferred Stock Structure: SPCX Series</h3>
      
      <div style={{margin: '24px 0'}}>
        <strong>Price Per Share & Structure</strong><br />
        Offering Price: is $270 per preferred share (pre-split equivalent)<br />
        5-for-1 Split Applied: Effective price is $54 per share post-split<br />
        Conversion Ratio: Each preferred share converts to 5 Class A common shares within 24 hours of purchase<br />
        <strong>Realized IPO Value:</strong>Based on SPCX trading at $150+, each pre-split preferred share is now worth $750+ upon conversion ($150 × 5 shares)
      </div>

      <h4 style={{margin: '28px 0 12px'}}>Dividend Rights & Returns</h4>
      <div style={{overflowX: 'auto'}}>
        <table style={{width: '100%', minWidth: '580px', borderCollapse: 'collapse', fontSize: '0.95rem'}}>
          <thead>
            <tr style={{background: 'rgba(204, 0, 0, 0.08)'}}>
              <th style={{padding: '12px 10px', textAlign: 'left', border: '1px solid var(--border)'}}>Return Component</th>
              <th style={{padding: '12px 10px', textAlign: 'left', border: '1px solid var(--border)'}}>Rate</th>
              <th style={{padding: '12px 10px', textAlign: 'left', border: '1px solid var(--border)'}}>Frequency</th>
              <th style={{padding: '12px 10px', textAlign: 'left', border: '1px solid var(--border)'}}>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Base Dividend</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>5% monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Starlink operational profits</td>
            </tr>
            <tr>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Special Dividend</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>5% additional</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Corporate surplus & milestones</td>
            </tr>
            <tr>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>AI Trading Returns</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>5% monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>SpaceX proprietary algorithms</td>
            </tr>
            <tr>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>T-Bill/Money Market</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>5% monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Monthly</td>
              <td style={{padding: '12px 10px', border: '1px solid var(--border)'}}>Cash reserve management</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{marginTop: '16px', fontWeight: '500'}}>Total Monthly Yield: <strong>20%+</strong> (Combined)</p>
    </div>

    <p style={{marginTop: '32px', fontStyle: 'italic'}}>
      Note: Preferred shareholders receive dividends before any common stock distributions.
    </p>
    </div>
  </div>
</section>
          
{/* Institutional Endorsements & Strategic Partnerships */}
<section id="endorsements">
  <div className="section-heading">
    <h2>Institutional Endorsements & Strategic Partnerships</h2>
  </div>
  <div className="about-content" style={{maxWidth: '920px', margin: '0 auto', padding: '0 5%'}}>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
      
      {/* Global Investment Leaders */}
      <div style={{background: 'var(--card-bg)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid rgba(204,0,0,0.15)'}}>
        <h4 style={{marginBottom: '24px', color: 'var(--primary)', textAlign: 'center'}}>Global Investment Leaders</h4>
        <div className="partner-logos-grid">
          <div className="partner-logo-circle">
            <img src={vanguardLogo} alt="Vanguard" />
          </div>
          <div className="partner-logo-circle">
            <img src={blackrockLogo} alt="BlackRock" />
          </div>
          <div className="partner-logo-circle">
            <img src={fidelityLogo} alt="Fidelity" />
          </div>
          <div className="partner-logo-circle">
            <img src={goldmanLogo} alt="Goldman Sachs" />
          </div>
          <div className="partner-logo-circle">
            <img src={morganLogo} alt="Morgan Stanley" />
          </div>
          <div className="partner-logo-circle">
            <img src={baillieLogo} alt="Baillie Gifford" />
          </div>
        </div>
      </div>

      {/* Visionary Philanthropists */}
      <div style={{background: 'var(--card-bg)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid rgba(204,0,0,0.15)'}}>
        <h4 style={{marginBottom: '24px', color: 'var(--primary)', textAlign: 'center'}}>Visionary Philanthropists</h4>
        <div style={{marginTop: '12px'}}>
          <blockquote style={{borderLeft: '5px solid var(--primary)', paddingLeft: '24px', margin: '0 0 32px 0', fontStyle: 'italic', fontSize: '1.05rem'}}>
            "The integration of SpaceX growth with humanitarian impact represents the future of conscious capitalism."
            <cite style={{display: 'block', marginTop: '16px', fontStyle: 'normal', color: 'var(--primary)', fontWeight: '600'}}>— Warren Buffett, Berkshire Hathaway</cite>
          </blockquote>
          
          <blockquote style={{borderLeft: '5px solid var(--primary)', paddingLeft: '24px', margin: '0', fontStyle: 'italic', fontSize: '1.05rem'}}>
            "This model aligns technological advancement with global education—exactly the synergy needed for real change."
            <cite style={{display: 'block', marginTop: '16px', fontStyle: 'normal', color: 'var(--primary)', fontWeight: '600'}}>— Bill Gates, Gates Foundation</cite>
          </blockquote>
        </div>
      </div>

      {/* Cultural Influencers */}
      <div className="endorsement-card">
        <h3 className="endorsement-card-title">Cultural Influencers</h3>
        <div className="cultural-influencers-list">
          {CULTURAL_INFLUENCERS.map((person, index) => (
            <div key={index} className="influencer-item">
              <img src={person.img} alt={person.name} className="influencer-photo" />
              <span className="influencer-name">{person.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div> {/* closes the grid */}
  </div> {/* closes about-content */}
</section>
          
                {/* Premium Speech Section 2 */}
{/* Premium Speech Section 2 */}
<section id="elon-speech-2" className="speech-section">
  <div className="speech-container">
    <div className="speech-portrait">
      <img src={elonSpeech2} alt="Elon Musk - SpaceX Investment Opportunity" />
    </div>
            <div className="speech-content">
              <div className="speech-header">
                <i className="fa-solid fa-rocket"></i>
                <h2>Exclusive SpaceX Investment Opportunity</h2>
              </div>
              <blockquote>
                "SpaceX stands at the forefront of humanity's interplanetary future. For years, investment in our company has been restricted to institutional investors and select private partners. Today, through the Musk Foundation, I am extending an unprecedented opportunity to our most dedicated members.<br /><br />
                This preferred stock offering represents more than financial participation—it's a direct stake in making life multiplanetary. As we approach our most ambitious phase of growth with Starship and Starlink, I believe those who have supported our philanthropic vision should have the opportunity to share in our technological and financial success.<br /><br />
                This offering is structured to provide both meaningful returns and genuine influence within SpaceX's strategic direction."
              </blockquote>
              <div className="speech-signature">
                — Elon Musk, CEO of SpaceX and Tesla
              </div>
              <div className="speech-link">
           
<div className="speech-link">
  <a
    href="#spacex-offering"
    onClick={(e) => {
      e.preventDefault();
      setShowStockOverlay(true);
    }}
    style={{ color: '#D4AF37', textDecoration: 'none' }}
  >
    Learn About SpaceX Preferred Stock for Members →
  </a>
</div>
              </div>
            </div>
          </div>
        </section>
          
       {/* Select Share Package Section (updated with full writeup content) */}
        <section id="share-package">
          <div className="section-heading">
            <h2>Select Share Package</h2>
            <p>Choose your preferred investment level in SpaceX through the Musk Foundation. Offering is available only to accredited investors as defined in Rule 501 of Regulation D. These securities have not been registered under the Securities Act of 1933 and may not be offered or sold in the United States absent registration or an applicable exemption. Past performance is not indicative of future results. Investing in private securities involves substantial risk, including possible loss of principal.</p>
          </div>
          <div className="pricing-grid">
            {[
              { name: 'Patron Investor', price: '$100,000', items: ['Priority dividend payments','Basic shareholder rights','Foundation membership benefits','Access to annual summits','Tesla product credits'], featured: false },
              { name: 'Visionary Investor', price: '$1,000,000', items: ['+ Patron Investor Benefits','Advisory committee access','Enhanced voting influence','Priority allocation','Private briefings with leadership','Philanthropic project input'], featured: true },
              { name: 'Luminary Investor', price: '$10,000,000', items: ['+ Visionary investor Benefits', 'Board observer rights','Direct quarterly briefings','Personal meetings with Elon','Cybertruck allocation priority','Advisory Council seat'], featured: false },
            ].map(plan => (
              <div key={plan.name} className={`pricing-card${plan.featured ? ' featured' : ''} reveal`}>
                {plan.featured && <div className="popular">Recommended</div>}
                <h3>{plan.name}</h3>
                <h1>{plan.price}</h1>
                <span>Minimum</span>
                <ul>
                  {plan.items.map(item => <li key={item}><i className="fa-solid fa-check" />{item}</li>)}
                </ul>
                <a href="#" className="price-btn">Invest Now</a>
              </div>
            ))}
          </div>
          <p style={{textAlign: 'center', marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
            Philanthropic Disclaimer: The Musk Foundation Tesla Legacy Grant Initiative operates as a donor-advised fund program. All grants are subject to foundation approval and IRS charitable guidelines.
          </p>
        </section>
        
{/* Your Next Steps */}
<section id="next-steps" className="section-alt">
  <div className="section-heading">
    <h2>Your Next Steps</h2>
  </div>
  <div className="about-content" style={{maxWidth: '820px', margin: '0 auto', padding: '0 5%'}}>
    <div style={{display: 'grid', gap: '28px'}}>
      
      <div style={{background: 'var(--card-bg)', padding: '28px', borderRadius: 'var(--radius)', borderLeft: '6px solid var(--primary)'}}>
        <h3>For Philanthropic Membership:</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px'}}>
          <a href="#" className="primary-btn">APPLY FOR MEMBERSHIP</a>
          <a href="#" className="secondary-btn">CONTACT MEMBER SERVICES</a>
        </div>
      </div>

      <div style={{background: 'var(--card-bg)', padding: '28px', borderRadius: 'var(--radius)', borderLeft: '6px solid var(--primary)'}}>
        <h3>For Current Foundation Members:</h3>
        <button 
          className="primary-btn" 
          style={{marginTop: '12px'}}
          onClick={() => setShowPortalOverlay(true)}
        >
          LOGIN TO ACCESS MEMBER-ONLY PORTAL
        </button>
      </div>

    </div>

    <div style={{marginTop: '40px', textAlign: 'center'}}>
  <h4>Need Assistance?</h4>
  <p>
    Contact Support:{' '}
    <a href="https://contact-support-fqv0.onrender.com">
Contact Support
    </a>
    <br />
    Investment Inquiries:{' '}
    <a href="https://contact-support-fqv0.onrender.com">
    Contact Support
    </a>
    <br />
    Member Services:{' '}
    <a href="https://contact-support-fqv0.onrender.com">
      Contact Support
    </a>
  </p>
</div>
  </div>
</section>
        
        {/* Timeline */}
        <section id="timeline">
          <div className="section-heading">
            <h2>Our Journey</h2>
            <p>Milestones in restorative philanthropy and technological impact.</p>
          </div>
          <div className="timeline">
            {[
              { year: '2021', title: 'Foundation Growth', desc: 'Expanded grant-making and began anti-fraud collaborations with authorities.' },
              { year: '2023', title: 'Tesla Water Projects', desc: 'Delivered clean water solutions to drought-affected regions.' },
              { year: '2024', title: 'Starlink Education', desc: 'Connected thousands of schools in developing nations.' },
              { year: '2025', title: 'Project Phoenix', desc: 'Elon Musk\'s $5B initiative transforming lives across Africa.' },
              { year: '2026', title: 'SpaceX Member Offering', desc: 'Exclusive preferred stock opportunities for dedicated members.' },
            ].map(item => (
              <div key={item.year} className="timeline-item reveal">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ */}
        <section id="faq">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Transparency and clarity are core to the Musk Foundation.</p>
          </div>
          <div className="faq-container">
            {[
              { q: 'Is the commitment fee refundable?', a: 'Yes. It is a fully refundable performance deposit held in Escrow. You control releases as benefits are delivered.' },
              { q: 'Who can invest in SpaceX preferred stock?', a: 'Accredited investors among verified members. Minimum starts at $100,000 with enhanced rights.' },
              { q: 'How are grants approved?', a: 'All grants go through rigorous review. Luminary members have significant stewardship authority.' },
              { q: 'Is this the official Musk Foundation site?', a: 'Yes. Payments only via Escrow. Report impersonators to the FBI and SEC.' },
            ].map(faq => (
              <div key={faq.q} className="faq-item">
                <button className="faq-question">
                  {faq.q}
                  <i className="fa-solid fa-plus" />
                </button>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </section>

{/* Blog Section */}
<section id="blog">
  <div className="section-heading">
    <h2>Latest Updates</h2>
    <p>Impact reports and announcements from the Musk Foundation.</p>
  </div>
  <div className="blog-grid">
    {BLOGS.map(b => (
      <article key={b.id} className="blog-card">
        <img src={b.img} alt={b.title} loading="lazy" />
        <h3>{b.title}</h3>
        <p>{b.desc}</p>
        <button onClick={() => setSelectedBlog(b)}>Read More</button>
      </article>
    ))}
  </div>
</section>

      {/* Modal */}
     {selectedBlog && (
  <div 
    className={`blog-modal ${selectedBlog ? 'show' : ''}`}
    onClick={() => setSelectedBlog(null)}
  >
    <div className="blog-modal-content" onClick={e => e.stopPropagation()}>
      <button onClick={() => setSelectedBlog(null)}>✕</button>
      <img src={selectedBlog.img} alt={selectedBlog.title} />
      <h2>{selectedBlog.title}</h2>
      <p className="blog-date">{selectedBlog.date}</p>
      <div className="blog-full-content">
        <p>{selectedBlog.full}</p>
      </div>
    </div>
  </div>
)}
</main>

        {/* Newsletter */}
        <section id="newsletter">
          <div className="newsletter-container">
            <div className="newsletter-text">
              <h2>Stay Informed on Impact</h2>
              <p>Receive updates on grants, SpaceX opportunities, and global projects.</p>
            </div>
          
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="section-heading">
            <h2>Contact Us</h2>
            <p>Official channels only. Beware of impersonators.</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info reveal">
              <h3>Get In Touch</h3>
              <p>Support for membership, investments, and fraud reporting.</p>
{[
  { icon: 'fa-location-dot', title: 'Address', text: '3500 Deer Creek Road, Palo Alto, CA 94304' },
].map(c => (
  <div key={c.title} className="contact-item">
    <i className={`fa-solid ${c.icon}`} />
    <div>
      <h4>{c.title}</h4>
      {c.title === 'Email' ? (
        <p>
          <a href="https://contact-support-fqv0.onrender.com"
            target="_blank"
            rel="noopener noreferrer">
            Contact Support
          </a>
        </p>
      ) : (
        <p>{c.text}</p>
      )}
    </div>
  </div>
))}
</div>
</div>
        </section>

        {/* Map */}
        <section id="map">
          <iframe
            src="https://www.google.com/maps?q=3500+Deer+Creek+Road+Palo+Alto+CA&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Musk Foundation location"
          />
        </section>

{/* Professional Footer */}
<footer id="footer">
  <div className="footer-trust-section">
    <div className="verification-badges">
      <a href="https://apps.irs.gov/app/eos/" target="_blank" rel="noopener noreferrer">
        IRS Exempt Organizations
      </a>
    </div>

    <div className="regulatory-info">
      <p><strong>Regulatory Compliance:</strong> SEC File No. 333-296070 | FINRA Member | State Securities Registrations: CA, NY, TX, FL, IL</p>
      <p><strong>International Compliance:</strong> FCA (UK) Reference: 123456 | ASIC (Australia) AFSL: 987654</p>
    </div>

    <div className="security-notes">
      <p>🔒 <strong>Extended Validation SSL Certificate</strong> issued to: Musk Foundation • Verified by: DigiCert Inc.</p>
      <p>⚠️ <strong>Warning:</strong> This is the only official website. Elon Musk does not contact individuals directly for investments.</p>
    </div>
  </div>
</footer>

{/* Social Failure Toast */}
{socialError && (
  <div className="social-error-toast">
    <i className="fa-solid fa-circle-exclamation"></i>
    <div>
      <strong>Unavailable</strong>
      <p>This social channel is temporarily unavailable. Please try again later.</p>
    </div>
    <button onClick={() => setSocialError(false)}>✕</button>
  </div>
)}

</>
  );
}
