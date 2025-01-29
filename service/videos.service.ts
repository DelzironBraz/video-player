import { IVideoPlayer } from "@/@types/video.interface";

export class VideoPlayerService {
  async createVideoPlayer(VideoPlayer: IVideoPlayer): Promise<IVideoPlayer> {
    try {
      const response = await fetch(`${process.env.NEXT_API_URL}/videos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(VideoPlayer),
      });

      if (!response.ok) {
        throw new Error("Error creating VideoPlayer");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getVideoPlayers(): Promise<IVideoPlayer[]> {
    try {
      const response = await fetch(`${process.env.NEXT_API_URL}/videos`);

      if (!response.ok) {
        throw new Error("Error fetching VideoPlayers");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async getVideoPlayerById(id: string): Promise<IVideoPlayer> {
    try {
      const response = await fetch(`${process.env.NEXT_API_URL}/videos/${id}`);

      if (!response.ok) {
        throw new Error("Error fetching VideoPlayer");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async updateVideoPlayer(VideoPlayer: IVideoPlayer): Promise<IVideoPlayer> {
    try {
      const response = await fetch(
        `${process.env.NEXT_API_URL}/videos/${VideoPlayer.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(VideoPlayer),
        }
      );

      if (!response.ok) {
        throw new Error("Error updating VideoPlayer");
      }

      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async deleteVideoPlayer(id: string): Promise<void> {
    try {
      const response = await fetch(`${process.env.NEXT_API_URL}/videos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error deleting VideoPlayer");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
