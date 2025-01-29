"use server";

import { IVideoPlayer } from "@/@types/video.interface";
import { VideoPlayerService } from "@/service/videos.service";

const videoService = new VideoPlayerService();

export async function createVideoPlayer(
  videoPlayer: IVideoPlayer
): Promise<IVideoPlayer> {
  try {
    return await videoService.createVideoPlayer(videoPlayer);
  } catch (error) {
    console.error("Erro ao criar o vídeo:", error);
    throw new Error("Não foi possível criar o vídeo.");
  }
}

export async function getVideoPlayers(): Promise<IVideoPlayer[]> {
  try {
    return await videoService.getVideoPlayers();
  } catch (error) {
    console.error("Erro ao buscar os vídeos:", error);
    throw new Error("Não foi possível buscar os vídeos.");
  }
}

export async function getVideoPlayerById(id: string): Promise<IVideoPlayer> {
  try {
    return await videoService.getVideoPlayerById(id);
  } catch (error) {
    console.error("Erro ao buscar o vídeo:", error);
    throw new Error("Não foi possível buscar o vídeo.");
  }
}

export async function updateVideoPlayer(
  videoPlayer: IVideoPlayer
): Promise<IVideoPlayer> {
  try {
    return await videoService.updateVideoPlayer(videoPlayer);
  } catch (error) {
    console.error("Erro ao atualizar o vídeo:", error);
    throw new Error("Não foi possível atualizar o vídeo.");
  }
}

export async function deleteVideoPlayer(id: string): Promise<void> {
  try {
    await videoService.deleteVideoPlayer(id);
  } catch (error) {
    console.error("Erro ao deletar o vídeo:", error);
    throw new Error("Não foi possível deletar o vídeo.");
  }
}
