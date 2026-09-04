import aiLearningApril2026 from "../assets/gallery/ai-learning-session-april-2026.jpg";
import educTour1 from "../assets/gallery/educ-tour-team-representative-1.jpg";
import educTour2 from "../assets/gallery/educ-tour-team-representative-2.jpg";
import feb2025Top from "../assets/gallery/feb-2025-top-performer.jpg";
import jan2025Speech from "../assets/gallery/jan-2025-top-performer-speech.jpg";
import jan2025Top from "../assets/gallery/jan-2025-top-performer.jpg";
import july2024Top from "../assets/gallery/july-2024-top-performer.jpg";
import july2025Top from "../assets/gallery/july-2025-top-performer.jpg";
import june2024Second from "../assets/gallery/june-2024-2nd-top-performer.jpg";
import march2024Top from "../assets/gallery/march-2024-top-performer.jpg";
import may2025Second from "../assets/gallery/may-2025-2nd-top.jpg";
import nov2024Top from "../assets/gallery/nov-2024-top-performer.jpg";
import oct2024Second from "../assets/gallery/oct-2024-2nd-top-performer.jpg";
import topPerformer2 from "../assets/gallery/top-performer-of-the-month-2.jpg";
import topPerformer3 from "../assets/gallery/top-performer-of-the-month-3.jpg";
import topPerformer from "../assets/gallery/top-performer-of-the-month.jpg";

export interface GalleryItem {
    src: string;
    caption: string;
}

export const GALLERY: GalleryItem[] = [
    { src: march2024Top, caption: "March 2024 · Top performer" },
    { src: june2024Second, caption: "June 2024 · 2nd top performer" },
    { src: july2024Top, caption: "July 2024 · Top performer" },
    { src: oct2024Second, caption: "October 2024 · 2nd top performer" },
    { src: nov2024Top, caption: "November 2024 · Top performer" },
    { src: jan2025Top, caption: "January 2025 · Top performer" },
    { src: jan2025Speech, caption: "January 2025 · Top performer speech" },
    { src: feb2025Top, caption: "February 2025 · Top performer" },
    { src: may2025Second, caption: "May 2025 · 2nd top performer" },
    { src: july2025Top, caption: "July 2025 · Top performer" },
    { src: educTour1, caption: "Education tour · Team representative" },
    { src: educTour2, caption: "Education tour · Team representative" },
    { src: aiLearningApril2026, caption: "April 2026 · AI learning session" },
    { src: topPerformer, caption: "Top performer of the month" },
    { src: topPerformer2, caption: "Top performer of the month" },
    { src: topPerformer3, caption: "Top performer of the month" },
];
